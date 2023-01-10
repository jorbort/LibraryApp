//creates the library array
let myLibrary = [];
let newBook

//build the book constructor function
function Book (title,author,pages,read){
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

let modal = document.querySelector('.modal')
let modalBackground = document.getElementById('staticBackdrop')

//creates and adds the book to the library array
const form = document.querySelector('#form')
form.addEventListener('submit',(e) => {
    e.preventDefault();
    let title =  document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').value
    let book = new Book(title,author,pages,read);
    myLibrary.push(book)
    form.reset()
    render()
})    

//displays the bok array on screen
function render(){
    const display = document.getElementById('cardContainer');
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => display.removeChild(card));
for(let i = 0;i<myLibrary.length;i++){
    createBook(myLibrary[i])
    }
}

//creates book dom elements
function createBook(item){
    const library = document.querySelector('#cardContainer')
    const card = document.createElement('div');
    const bookTitle = document.createElement('h4');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');


    card.classList.add('card');
    card.setAttribute('id',myLibrary.indexOf(item));

    bookTitle.textContent = item.title;
    bookTitle.classList.add('title')
    card.appendChild(bookTitle);

    authorP.textContent = item.author;
    authorP.classList.add('author');
    card.appendChild(authorP);

    pagesP.textContent = item.pages;
    pagesP.classList.add('pages');
    card.appendChild(pagesP);

    readBtn.classList.add('readBtn');
    card.appendChild(readBtn);
    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    
    removeBtn.textContent = 'remove';
    removeBtn.setAttribute('id','removeBtn')
    card.appendChild(removeBtn);

    library.appendChild(card);
//gives functionality to the delete btn 
    removeBtn.addEventListener('click', ()=>{
        myLibrary.splice(myLibrary.indexOf(item),1);
        render();
    });
    
    readBtn.addEventListener('click', () => { 
        item.read = !item.read;  
        render();
    }); 

}

