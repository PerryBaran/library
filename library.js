const add = document.getElementById('add');
const submit = document.getElementById('submit');
const bookShelf = document.getElementById('bookshelf');
const closeForm = document.getElementById('close');

let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        info = title + ' by ' + author + ', ' + pages + ' pages' + ', ' + read;   
        return info;
    }
};

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    console.log(myLibrary)
};

function displayLibrary() {
    reset(bookShelf)

    for (i = 0; i < myLibrary.length; i++) {
        let info = document.createElement('div');
        info.className = 'book';
        info.innerHTML = myLibrary[i].title + '<br>' + myLibrary[i].author + '<br>' + 
            myLibrary[i].pages + '<br>' + myLibrary[i].read + '<br>';
        bookShelf.appendChild(info);
    }
}

function reset(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

add.addEventListener('click', () => {
    document.getElementById('container').style.display = "flex";
});

submit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new book(title, author, pages, read)
    addBookToLibrary(newBook);
    displayLibrary()
});

closeForm.addEventListener('click', () => {
    document.getElementById('container').style.display = "none";
})

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', '295', 'not read');
const theScrobbit = new book('The Scrobbit', 'J.R.R Tolkent', '69', 'read');
const theBopit = new book('The Bopit', 'J.R.R Tokesome', '420', 'not read');

myLibrary.push(theHobbit)
myLibrary.push(theScrobbit)
myLibrary.push(theBopit)

displayLibrary();