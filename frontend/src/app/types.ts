export type Author = {
    first_name: string;
    last_name: string;
    affiliation: string;
    // Add other properties of an author as needed
};

export type Article = {
    affiliation: string[];
    authors: Author[];
    citation_count: number;
    citations: string[];
    doi: string;
    id: string;
    published_date: string;
    retracted: boolean;
    title: string;
};