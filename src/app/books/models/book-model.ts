export enum Category {
  novella = 'novella',
  poem = 'poem',
  adventure = 'adventure',
}

export interface IBookModel {
  id: number,
  name: string;
  description: string;
  price: number;
  category: Category;
  createDate: Date | string;
  isAvailable: boolean;
}
