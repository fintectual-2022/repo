import { defineStore } from "pinia";
import {MaybeComputedRef, useStorage} from '@vueuse/core'

export type IState = {
		radius: MaybeComputedRef<number>,
};

export const useUserStore = defineStore({
				id: "userStore",
				state: () =>
						({
								radius: useStorage('radius',100),
						} as IState),

				actions: {

				},

				getters: {

				}
});