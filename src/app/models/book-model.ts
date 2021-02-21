export enum Category {
    novella,
    poem,
    adventure,
}

export interface IBookModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: Date | string;
    isAvailable: boolean;
}

