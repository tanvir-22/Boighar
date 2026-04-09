import React, { createContext } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [markedBook, setMarkedBook] = useState([]);
    const [wishList,setWishList] = useState([]);
    const handleRead = (currentBook) => {

        const isExist = markedBook.find((item) => item.bookId == currentBook.bookId)

        if (isExist) {
            toast.error("Already exist in read list")
        } else {
            setMarkedBook([...markedBook, currentBook])
            toast.success(`${currentBook.bookName} is added to read list `)
        }
        console.log(markedBook);
    }
    const handlewishList = (currentBook)=>{
        const isExist = markedBook.find((item) => item.bookId == currentBook.bookId)
        
        if(isExist){
            toast.error("already exist in read list");
            return;
        }
        
        
        
        
        const isExistInWishList = wishList.find((item)=>item.bookId==currentBook.bookId);

        if(isExistInWishList){
            toast.error("already exist in wishlist!");
        }else{
            setWishList([...wishList,currentBook]);
            toast.success(`${currentBook.bookName} added to wishlist`)
        }
    }
    const data = {
        markedBook,setMarkedBook,handleRead,wishList,handlewishList
    }
    return <BookContext.Provider value = {data}>
        {children}
    </BookContext.Provider>
}

export default BookProvider