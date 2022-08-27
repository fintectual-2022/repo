import { defineStore } from "pinia";
import {Tender} from "../opentenderSchema";
import {GraphSchema, GraphLink} from "../schema";
import { useStorage } from '@vueuse/core'

export type IState = {
		tenders: Tender[],
		likedIds: any, // TODO: fix types
		dislikedIds: any,
};

export const useMainStore = async () => {
		const store = defineStore({
				id: "mainStore",
				state: () =>
						({
								tenders: [],
								// persisting user data in localstorage
								likedIds: useStorage('likedIds',new Set()),
								dislikedIds: useStorage('dislikedIds',new Set()),
						} as IState),

				actions: {
						async fetchData() { // this reads the json file from '/public' directory
								const data = await fetch('data-cz-2022.json')
								this.tenders = await data.json()
						},
						likeTender(id:String){
								// push the id into the liked set
								this.likedIds.add(id)
						},
						dislikeTender(id:String){
								// push the id into the liked set
								this.dislikedIds.add(id)
						},

				},

				getters: {
						getRandomTender(): Tender {
								// this should make sure we are not displaying the same offer twice.
								let randomTender
								do {
										randomTender = this.tenders[Math.floor(Math.random()*this.tenders.length)]
								} while(this.dislikedIds.has(randomTender.id) || this.likedIds.has(randomTender.id))
								return randomTender
						},
						getLikedTenders() : Tender[] | undefined {
								if(this.likedIds.size <=0){
										return undefined
								}
								else { // there are liked tenders present

								}

						}
				}


				// --- boilerplate typescript from <https://dev.to/carlomigueldy/getting-started-with-vue-3-pinia-store-typescript-by-building-a-grocery-list-app-19km>
				//
				// 		updateItem(id: string, payload: Item) {
				// 				if (!id || !payload) return;
				//
				// 				const index = this.findIndexById(id);
				//
				// 				if (index !== -1) {
				// 						this.items[index] = generateFakeData();
				// 				}
				// 		},
				//
				// 		deleteItem(id: string) {
				// 				const index = this.findIndexById(id);
				//
				// 				if (index === -1) return;
				//
				// 				this.items.splice(index, 1);
				// 		},
				//
				// 		findIndexById(id: string) {
				// 				return this.items.findIndex((item) => item.id === id);
				// 		},
				// },
		});
		// wraps the store to automatically fetch tenders when the store is created
		const s = store();
		if (s.tenders.length <= 0) {
				console.log('fetching tenders')
				await s.fetchData()
		}
		return s
}