let myLibrary = [];

function book(title, author, desc, image ){
    //constructor
    this.title = title;
    this.author = author;
    this.desc = desc;
    this.image = image;
    this.read = false;
}

const addBook = document.querySelector(".AddButton");
const modal = document.querySelector(".modal-container");
const cancel = document.querySelector("#cancel");
const submit - document.querySelector("#submit");

addBook.addEventListener('click',()=>{
     modal.classList.toggle("active");
});

cancel.addEventListener("click", ()=>{
    modal.classList.toggle("active");
    document.querySelector("form").reset();
});

submit.addEventListener("click",()=>{
    //get all data and create new book object
    
});

