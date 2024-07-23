export interface book {
    bookId: number,
    bookName: string,
    bookPrice: number,
    content: string,
    author: string,
    totalPages: number,
    publicationDate: Date,
    genre: string,
    status: string,
    isDelete: boolean
}

export interface OrderBook {
    id: string,
    bookId: number,
    borrowedAt: string,
    borrowedTime: number,
    returnedAt: string,
    status: boolean,
    customerName: string,
    customerPhone: string,
    customerAddress: string
}

export interface Student {
    id: number,
    name: string,
    dateOfBirth: string,
    address: string,
    classId: string,
    gender: boolean,
    phone: string
}

export type StateType= {
    book: book[],
    order: OrderBook[]
}