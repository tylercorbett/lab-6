let listItems = [];

function saveTextInput() {
    localStorage.setItem('to-dos', JSON.stringify(listItems));
}

const todoApi = {
    getAll() {
        const json = localStorage.getItem('listItems');
        if(json) {
            listItems = JSON.parse(json);
        }
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

export default todoApi;