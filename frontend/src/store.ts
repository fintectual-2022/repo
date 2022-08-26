import { defineStore } from "pinia";
import {Tender} from "./opentenderSchema";
import {GraphSchema, GraphLink} from "./schema";
import { useStorage } from '@vueuse/core'

export type IState = {
		tenders: Tender[],
		likedTenders: any,
		dislikedTenders: any,
};

export const useMainStore = async () => {
		const store = defineStore({
				id: "mainStore",
				state: () =>
						({
								tenders: [],
								likedTenders: useStorage('likes',new Set()),
								dislikedTenders: useStorage('dislikes',new Set()),
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
								this.dislikedTenders.add(id)
						}
				},

				getters: {
						getRandomTender(): Tender {
								// this should make sure we are not displaying the same offer twice.
								let randomTender
								do {
										randomTender = this.tenders[Math.floor(Math.random()*this.tenders.length)]
								} while(this.dislikedTenders.has(randomTender.id) || this.likedTenders.has(randomTender.id))
								return randomTender
						},
						calculateGraph(): GraphSchema {

								const masterNode = {
										id: 'pog',
										name: `${this.likedTenders.size} Liked Tenders`
								}

								const nodes = [...this.likedTenders].map((id: string) => {
										// hydrate from data
										return this.tenders.find(tender => id === tender.id)
								})
								nodes.push(masterNode)
								// create a connection from pog to each node

								const links: GraphLink[] = []
								for(const node of nodes){
										if (node.id !== 'pog') // skip self-refference
										links.push({
												source: node.id,
												target: 'pog'
												})
								}

								return {
									nodes,
									links
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