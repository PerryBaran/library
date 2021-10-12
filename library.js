function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        info = title + ' by ' + author + ', ' + pages + ' pages' + ', ' + read;   
        return info;
    }
}

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', '295', 'not read');
console.log(theHobbit.info())