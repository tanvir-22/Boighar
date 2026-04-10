const getAllMarkedBookFromLocalDb = () => {
    const allMarkedList = localStorage.getItem("markedList");
    if (allMarkedList) 
        {
            return JSON.parse(allMarkedList);
        }
    else{
        return [];
    }

}


const setAllMarkedBookToLocalDb = (book) => {

    const allbooks = getAllMarkedBookFromLocalDb()
    const isAlreadyExist = allbooks.find((item) => item.bookId == book.bookId);
    if (!isAlreadyExist) {
        allbooks.push(book)
        localStorage.setItem("markedList", JSON.stringify(allbooks))
    }

}

export { getAllMarkedBookFromLocalDb, setAllMarkedBookToLocalDb }