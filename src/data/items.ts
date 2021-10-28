import { Item } from '../types/Item';

export const items: Item[] = [
    { 
        date: new Date(2021, 9, 21), 
        category: 'food', 
        title: 'McDonalds', 
        value: 32.12 
    },
    { 
        date: new Date(2021, 9, 15), 
        category: 'food', 
        title: 'Burguer King', 
        value: 28.80 
    },
    { 
        date: new Date(2021, 9, 14), 
        category: 'rent', 
        title: 'Aluguel', 
        value: 2300 
    },
    { 
        date: new Date(2021, 10, 18), 
        category: 'salary', 
        title: 'Salário ACME', 
        value: 4500 
    }
];