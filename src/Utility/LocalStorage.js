const getReadBookList = () => {
  const storedReadBookList = localStorage.getItem("readBookList");
  if (storedReadBookList) {
    return JSON.parse(storedReadBookList);
  }
  return [];
};
const getWishlistBookList = () => {
  const storedWishlistBookList = localStorage.getItem("wishlistBookList");
  if (storedWishlistBookList) {
    return JSON.parse(storedWishlistBookList);
  }
  return [];
};

const saveReadBookList = (id) => {
  const storedReadBookList = getReadBookList();
  const exists = storedReadBookList.find((bookId) => bookId === id);
  if (!exists) {
    storedReadBookList.push(id);
    localStorage.setItem("readBookList", JSON.stringify(storedReadBookList));
  }
};
const saveWishlistBookList = (id) => {
  const storedWishlistBookList = getWishlistBookList();
  const exists = storedWishlistBookList.find((bookId) => bookId === id);
  if (!exists) {
    storedWishlistBookList.push(id);
    localStorage.setItem(
      "wishlistBookList",
      JSON.stringify(storedWishlistBookList)
    );
  }
};

export {
  getReadBookList,
  saveReadBookList,
  getWishlistBookList,
  saveWishlistBookList,
};
