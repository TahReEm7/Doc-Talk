const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    return storedBookSTR ? JSON.parse(storedBookSTR) : [];
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        console.log("Book already in the list");
        return;
    }
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
    console.log("Book added to the list");
};

export const removeFromStoredDB = (id) => {
    const idStr = String(id); 
    const storedBookData = getStoredBook();
    
    const updated = storedBookData.filter(storedId => storedId !== idStr);
    localStorage.setItem('readList', JSON.stringify(updated));
    
    console.log(`Book with ID ${idStr} removed from the list`);
};
export { addToStoredDB, getStoredBook };
