const bookShelf = document.getElementById('bookshelf');
const closeForm = document.getElementById('close');

let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.date = new Date()
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
    sort();

    for (i = 0; i < myLibrary.length; i++) {
        let info = document.createElement('div');
        var checkbox = myLibrary[i].read? 'checked' : '';
        
        info.className = 'table';
        info.innerHTML = '<div class="cell span2">' + myLibrary[i].title + '</div><div class="cell span2">'
                     + myLibrary[i].author + '</div><div class="cell">' 
                     + myLibrary[i].pages + '</div><div class="cell">'
                     + '<input type="checkbox" onclick ="updateRead(' + i + ')"' + checkbox + '>' + '</div><div class="cell">'
                     + myLibrary[i].date.toString().slice(4, 21)  + '</div><div class="cell">'
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

function updateRead(i){
    myLibrary[i].read = myLibrary[i].read? false: true;
    displayLibrary();
}

function editBook(i){
    document.getElementById('title').value = myLibrary[i].title;
    document.getElementById('title').dataset.indexNumber = i;
    document.getElementById('author').value = myLibrary[i].author;
    document.getElementById('pages').value = myLibrary[i].pages;
    document.getElementById('read').checked = myLibrary[i].read;
    showEditDelete();
    document.querySelector('.container').style.display = "flex";
};

function delBook(i) {
    myLibrary.splice(i, 1);
    displayLibrary();
};


function close(){
    document.querySelector('.container').style.display = "none";
};

function showEditDelete() {
    document.getElementById('edit').style.display = "inline-block";
    document.getElementById('delete').style.display = "inline-block";
};

function hideEditDelete() {
    document.getElementById('edit').style.display = "none";
    document.getElementById('delete').style.display = "none";
};

function resetBookEditor() {
    document.getElementById('title').value = '';
    document.getElementById('title').dataset.indexNumber = null;
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = '';
};

const add = document.getElementById('add');
add.addEventListener('click', () => {
    hideEditDelete();
    resetBookEditor()
    document.querySelector('.container').style.display = "flex";
});

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new book(title, author, pages, read)
    addBookToLibrary(newBook);
    displayLibrary()
});

const edit = document.getElementById('edit');
edit.addEventListener('click', () => {
    const i = document.getElementById('title').dataset.indexNumber;
    myLibrary[i].title = document.getElementById('title').value ;
    myLibrary[i].author = document.getElementById('author').value;
    myLibrary[i].pages = document.getElementById('pages').value;
    myLibrary[i].read = document.getElementById('read').checked;

    close();
    displayLibrary()
});

const del = document.getElementById('delete');
del.addEventListener('click', () => {
    const i = document.getElementById('title').dataset.indexNumber;
    myLibrary.splice(i, 1);
        
    resetBookEditor()
    close();
    displayLibrary();
})

const cancel = document.getElementById('cancel')
cancel.addEventListener('click', () => {
    close();
});

closeForm.addEventListener('click', () => {
   close();
});

//sorting
function byTitle() {
    myLibrary.sort((a, b) => (a.title > b.title) ? 1: -1)
}

function byTitleReverse() {
    myLibrary.sort((a, b) => (a.title > b.title) ? -1: 1)
}

function byAuthor() {
    byTitle();
    myLibrary.sort((a, b) => (a.author > b.author) ? 1: -1)
}

function byAuthorReverse() {
    byTitle();
    myLibrary.sort((a, b) => (a.author > b.author) ? -1: 1)
}

function byPages() {
    byTitle();
    myLibrary.sort((a, b) => (a.pages > b.pages) ? 1: -1)
}

function byPagesReverse() {
    byTitle();
    myLibrary.sort((a, b) => (a.pages > b.pages) ? -1: 1)
}

function byRead() {
    byTitle();
    myLibrary.sort((a, b) => (a.read > b.read) ? 1: -1)
}

function byReadReverse() {
    byTitle();
    myLibrary.sort((a, b) => (a.read > b.read) ? -1: 1)
}

function byDate() {
    byTitle();
    myLibrary.sort((a, b) => (a.date > b.date) ? 1: -1)
}

function byDateReverse() {
    byTitle();
    myLibrary.sort((a, b) => (a.date > b.date) ? -1: 1)
}

var sort = byDate;
const sortInput = document.querySelectorAll('.sort')
sortInput.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.id) {
            return
        } else if (button.id === "title") {
            sort = byTitle;
        } else if (button.id === "titleReverse") {
            sort = byTitleReverse;
        } else if (button.id === "author") {
            sort = byAuthor;
        } else if (button.id === "authorReverse") {
            sort = byAuthorReverse;
        } else if (button.id === "pages") {
            sort = byPages;
        } else if (button.id === "pagesReverse") {
            sort = byPagesReverse;
        } else if (button.id === "checked") {
            sort = byRead;
        } else if (button.id === "checkedReverse") {
            sort = byReadReverse;
        } else if (button.id === "date") {
            sort = byDate;
        } else if (button.id === "dateReverse") {
            sort = byDateReverse;
        }
        displayLibrary();
    });
});
   

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', '295', false);
const theScrobbit = new book('The Scrobbit', 'J.R.R Tolkent', '69', true);
const theBopit = new book('The Bopit', 'J.R.R Tokesome', '420', false);

myLibrary.push(theHobbit)
myLibrary.push(theScrobbit)
myLibrary.push(theBopit)

displayLibrary();
