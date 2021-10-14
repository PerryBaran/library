const add = document.getElementById('add');
const submit = document.getElementById('submit');
const edit = document.getElementById('edit');
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

        if (myLibrary[i].read) {
            checkbox = '<input type="checkbox" checked>'
        } else {
            checkbox = '<input type="checkbox">'
        }
        info.className = 'table';
        info.innerHTML = '<div class="cell span2">' + myLibrary[i].title + '</div><div class="cell span2">'
                     + myLibrary[i].author + '</div><div class="cell">' 
                     + myLibrary[i].pages + '</div><div class="cell">'
                     + checkbox + '</div><div class="cell">'
                     + '<button onclick="editBook(' + i + ')">EDIT</button></div><div class="cell">'
                     + '<button onclick="delBook(' + i + ')">DELETE</button></div>'
        
        bookShelf.appendChild(info);
    }
};

function reset(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function editBook(i){
    document.getElementById('titleEdit').value = myLibrary[i].title;
    document.getElementById('titleEdit').dataset.indexNumber = i;
    document.getElementById('authorEdit').value = myLibrary[i].author;
    document.getElementById('pagesEdit').value = myLibrary[i].pages;
    document.getElementById('readEdit').checked = myLibrary[i].read;
    document.querySelector('.edit').style.display = "flex";
}

function delBook(i) {
    myLibrary.splice(i, 1);
    displayLibrary();
}

function close(){
    document.querySelector('.container').style.display = "none";
}

add.addEventListener('click', () => {
    document.querySelector('.new').style.display = "flex";
});

edit.addEventListener('click', () => {
    const i = document.getElementById('titleEdit').dataset.indexNumber;
    myLibrary[i].title = document.getElementById('titleEdit').value ;
    myLibrary[i].author = document.getElementById('authorEdit').value;
    myLibrary[i].pages = document.getElementById('pagesEdit').value;
    myLibrary[i].read = document.getElementById('readEdit').checked;

    document.querySelector('.edit').style.display = "none";
    displayLibrary()
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
   close();
});

document.querySelectorAll('.del').forEach(button => {
    button.addEventListener('click', () => {
        console.log('yo')
    })
})

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', '295', false);
const theScrobbit = new book('The Scrobbit', 'J.R.R Tolkent', '69', true);
const theBopit = new book('The Bopit', 'J.R.R Tokesome', '420', false);

myLibrary.push(theHobbit)
myLibrary.push(theScrobbit)
myLibrary.push(theBopit)

displayLibrary();
