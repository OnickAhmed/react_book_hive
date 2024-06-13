const localStorageIdCheck = (id, storageName, job) => {
  const getList = localStorage.getItem(storageName);
  try {
    let listArray = JSON.parse(getList) || [];

    if (job == "check") {
      return listArray.includes(id);
    } else if (job == "delete") {
      console.log(listArray, id);
      listArray = listArray.filter(
        (idToDelete) => idToDelete !== id.toString()
      );
      console.log(listArray);
      localStorage.setItem(storageName, JSON.stringify(listArray));
      console.log("Deleted");
      return true;
    }
  } catch (error) {
    console.error("Error parsing readBookList from localStorage", error);
    return false;
  }
};

export { localStorageIdCheck };
