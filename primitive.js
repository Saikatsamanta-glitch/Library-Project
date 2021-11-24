console.log('hi');
//store all the date in local storage
//give another column/option to delete the book
//add scroll bar


//1. function 
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display Constructor
function Display() {

}

//add method to display protoype
Display.prototype.add = function (book) {
    console.log('Adding UI');
    tablebody = document.getElementById('tableBody');

    let uistring = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
     tablebody.innerHTML +=uistring;               
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate= function (book) {
    if(book.name.length<2 || book.author.length<2 )
    {
        return false;
    }
    else
    {
        return true;
    }
}

Display.prototype.show = function (type,dismessage) {
    let message=document.getElementById('message');
    message.innerHTML=`<div class="alert ${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${dismessage} You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  setTimeout(()=>{
  message.innerHTML=''
},2000);
}
// 2. Add submit event listerner to libraryform
let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {

    console.log('this is submit');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;


    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);


    let display = new Display();
    
    
    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success','your book has been sucessfullty added');
    }
    else
    {
        display.show('failure','Could\'nt add the book');
    }

    e.preventDefault();   //to stop it from reloading itself
}

/*


*/