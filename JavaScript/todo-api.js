let listItems = [
   
];

function customParser(key, value) {
    if(key !== 'due') return value;
    return new Date(value);
}

function saveTextInput() {
    localStorage.setItem('listItems', JSON.stringify(listItems));
}

const saved = localStorage.getItem('listItems');
if(saved) {
    listItems = JSON.parse(saved, customParser);
}

const todoApi = {
    getAll() {
        const json = localStorage.getItem('listItems');
        if(json) {
            listItems = JSON.parse(json);
        }
        return listItems;
    },
    add(textInput) {
        listItems.push(textInput);
        saveTextInput();
    },
    remove(textInput) {
        const index = listItems.indexOf(textInput);
        if(index !== -1) {
            listItems.splice(index, 1);
            saveTextInput();
        }
    }
};
saveTextInput();
export default todoApi;