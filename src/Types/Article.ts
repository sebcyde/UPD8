export type Article = {
	title: string;
	author: string;
	source: {
		Id: string;
		Name: string;
	};
	publishedAt: string;
	url: string;
};
