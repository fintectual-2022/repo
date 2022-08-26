import { defineStore } from "pinia";
import {Tender} from "./schema";

export type IState = {
		tenders: Tender[];
};

export const useMainStore = defineStore({
		id: "mainStore",
		state: () =>
				({
						tenders: [],
				} as IState),


		// --- boilerplate typescript from <https://dev.to/carlomigueldy/getting-started-with-vue-3-pinia-store-typescript-by-building-a-grocery-list-app-19km>
		actions: {
				addTender(tender:Tender) {
						if (!tender) return;
						this.tenders.push(tender);
				},
				async fetchData() {
					const data = await fetch('data-eu-2021.json')
					this.tenders = await data.json()
				},
		}
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