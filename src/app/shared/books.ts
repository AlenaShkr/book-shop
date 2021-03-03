import { IBookModel, Category } from "../books/models/book-model";

export const listOfBooks: IBookModel[] = [
    {
        name: 'The Little Prince',
        description: 'shdklhkjhjgsrhjkahjkrhfjh',
        price: 13.99,
        category: Category.novella,
        createDate: 'April 1943 ',
        isAvailable: true,
      },
      {
        name: 'The Little',
        description: 'shdklhkjhjgsrhjkahjkrhfjh',
        price: 10.99,
        category: Category.poem,
        createDate: 'April 1943 ',
        isAvailable: false,
      },
      {
        name: 'We',
        description: 'shdklhkjhjgsrh jkahjkrhfjhfdkjk jkhjggfjdvbb fjfbvbbvbvVmfkl jsaajhahfhjdhdjsbhbjhb bd hbb hfbdhbb hfbhd',
        price: 10.99,
        category: Category.poem,
        createDate: 'May 1987 ',
        isAvailable: true,
      },
];