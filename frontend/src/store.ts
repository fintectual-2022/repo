import { defineStore } from "pinia";
import {Tender} from "./schema";
import { useStorage } from '@vueuse/core'

export type IState = {
		tenders: Tender[],
		likedTenders: any,
		dislikedTenders: any,
		ready: boolean,
};

export const useMainStore = async () => {
		const store = defineStore({
				id: "mainStore",
				state: () =>
						({
								tenders: [],
								likedTenders: useStorage('likes',new Set()),
								dislikedTenders: useStorage('dislikes',new Set()),
								ready: false,
						} as IState),

				actions: {
						addTender(tender: Tender) {
								if (!tender) return;
								this.tenders.push(tender);
						},
						async fetchData() {
								const data = await fetch('data-eu-2021.json')
								this.tenders = await data.json()
						},
						likeTender(id:String){
								// push the id into the liked set
								this.likedTenders.add(id)
						},
						dislikeTender(id:String){
								// push the id into the liked set
								this.likedTenders.add(id)
						}
				},

				getters: {
						getRandomTender(): Tender {
								return this.tenders[Math.floor(Math.random()*this.tenders.length)]
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
		if (s.ready === false && s.tenders.length <= 0) {
				console.log('fetching tenders')
				await s.fetchData()
				s.ready = true
		}
		return s
}