import {createSlice} from "@reduxjs/toolkit"
import {book} from "../../interface/index"

const initBooks: book[] = [
    {
      bookId: 1,
      bookName: "Ohayo",
      bookPrice: 100,
      content: "Chưa biết",
      author: "Phan Nhựt Hào",
      totalPages: 40,
      publicationDate: new Date("2023-02-02"),
      genre: "MMM",
      status: "MMM",
      isDelete: true
    }, 

    {
        bookId: 2,
        bookName: "Ohayo",
        bookPrice: 100,
        content: "MMMMMM",
        author: "Phan Nhựt Hào",
        totalPages: 40,
        publicationDate: new Date(),
        genre: "MMM",
        status: "MMM",
        isDelete: true
      },

      {
        bookId: 3,
        bookName: "Ohayo",
        bookPrice: 100,
        content: "MMMMMM",
        author: "Phan Nhựt Hào",
        totalPages: 40,
        publicationDate: new Date(),
        genre: "MMM",
        status: "MMM",
        isDelete: true
      }


  ];

export const {actions, reducer} = createSlice({
    name: 'book-order',
    initialState: initBooks,
    reducers: {
        add: (state, action) => {
            const newBook: book = {
                ...action.payload,
                bookId: 10, // tự tăng
                status: true,
                isDelete: false,
                publicationDate: new Date().toISOString
            }
            return[...state, action.payload]
        },
        removeBook: (state, action) => {

        },
        updateBook: (state, action) => {

        }
    }
})

