

export type GraphLink = {
		// node ids
		source: string
		target: string
}

// type Node = {
// 		id: string
// }

export type GraphSchema = {
		nodes: any[],
		links: GraphLink[]
}
