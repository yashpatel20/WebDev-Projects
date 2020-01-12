//array to store books
let myLibrary = [];
//book constructor
let id=0;
function Book(title, author, desc, image){
    this.id = id++;
    this.title = title;
    this.author = author;
    this.desc = desc;
    this.image = image;
    this.read = false;
}
//Dom objects
let bookContainer = document.querySelector(".Library-container");
const addBook = document.querySelector(".AddButton");
const modal = document.querySelector(".modal-container");
const cancel = document.querySelector("#cancel");
const submit = document.querySelector("#submit");
//starting book and render it 
let startingBook = new Book("Harry Potter and the Chamber of Secrets","J.K. Rowling","This book follows Harry Potter's second year at Hogwarts as he opens the Chamber of Secrets to unleash a monster that petrifies the school's residents.", "https://www.familyeducation.com/sites/default/files/fe_slideshow/2007_07/HPusa2_TV.gif");
addBookToLibrary(startingBook);

//add book to library
function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    render();
}
//render all books in the myLibrary array and handle all read, add, delete buttons
function render(){
    //iterate over the mylibrary array and render all books in the library container
    bookContainer.innerHTML="";
    for(let myBook of myLibrary){
        bookContainer.innerHTML+= `<div class="book-item">
        <div class="book-photo">
            <div class="book-cover"><img src="${myBook.image}"></div>
        </div>
        <div class="book-desc">
            <div class="book-title">
            ${myBook.title}
            </div>
            <div class="book-author">
            ${myBook.author}
            </div>
            <div class="book-summary">
            ${myBook.desc}
            </div>

        </div>
        <div class="book-buttons">
            <button data-bookId=${myBook.id} class="read">Unread</button>
            <button data-deleteId=${myBook.id} class="delete">Delete</button>
        </div>                    
    </div>`;
    }

    //handle read button
let readBtn = document.querySelectorAll(".read");
readBtn.forEach(button => {
    button.addEventListener("click",()=>{console.log(button.dataset.bookId)});
});

//handle delete button for all books

let deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach(button =>{
        button.addEventListener("click",()=>{
            let currentIndex = button.dataset.deleteId;
            console.log(button.dataset.deleteId);
            delete myLibrary[currentIndex];
            render();
        });
    });

}


function toggleReadStatus(bookId){


}




//add book button toggles the form
addBook.addEventListener('click',()=>{
     modal.classList.toggle("active");
});

//cancel button toggles form and clears the form
cancel.addEventListener("click", ()=>{
    modal.classList.toggle("active");
    document.querySelector("form").reset();
});

//submit button will retrieve all book parameters, creates new book and calls addBookToLibrary()
submit.addEventListener("click",()=>{
    //get all data and create new book object
    let title = document.querySelector('input[name=title]').value;
    let author = document.querySelector("input[name=author]").value;
    let desc  =document.querySelector("input[name=Desc]").value;
    let imgModal = document.querySelector("imput[name=image]");
    let img="";
    if(!imgModal) img = "https://svgsilh.com/svg/152671.svg";
    else img = imgModal.value;

    let newBook = new Book(title,author,desc,img);
    addBookToLibrary(newBook);
    modal.classList.toggle("active");
    document.querySelector("form").reset();
});

