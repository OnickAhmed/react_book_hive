const getStoredBookList = () => {
    const storedBookList = localStorage.getItem('bookList');
    if (storedBookList) {
        return JSON.parse(storedBookList);
    }
    return [];
}

const saveBookList = id => {
    const storedBookList = getStoredBookList();
    const exists = storedBookList.find(bookId => bookId === id);
    if (!exists) {
        storedBookList.push(id);
        localStorage.setItem('bookList', JSON.stringify(storedBookList));
    }
}

export {getStoredBookList, saveBookList}