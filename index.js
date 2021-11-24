console.log('hi');

class Book
{
    constructor(name,author,type)
    {
        this.name=name;
        this.author=author;
        this.type=type;
    }
}
class Display
{
    add(book)
    {
        console.log('adding');
        let tablebody=document.getElementById('tableBody');
        let astring=`<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td><button style="background-color: red;">X</button></td>
                    </tr>`
        tablebody.innerHTML+=astring;            
    }
    clear()
    {
        let libraryForm=document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book)
    {
        if(book.name.length<2 || book.author.length<2 )
        {
            return false;
        }
        else
        {
            return true;
        }
    }


    show(type, displayMessage)
    {
        let message =document.getElementById('message');
        let boldText;
        if(type==='sucess')
        {
            boldText='sucess';
        }
        else
        {
            boldText='error';
        }
        message.innerHTML=`<div class="alert alert-${boldText} alert-dismissible fade show" role="alert">
        <strong>${boldText}:</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">X</span>
        </button>
        </div>`;

        setTimeout(function(){
            message.innerHTML=``
        },2000);

        
    }
}

let libraryform=document.getElementById('libraryForm');
libraryform.addEventListener('submit', libraryformSubmit);


function libraryformSubmit(e) {
    
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let type;
     let fiction=document.getElementById('fiction');
     let programming=document.getElementById('programming');
     let cooking=document.getElementById('cooking');


     if(fiction.checked)
     {
         type=fiction.value;         
     }
     else if(programming.checked)
     {
         type=programming.value;
     }
     else if(cooking.checked)
     {
         type=cooking.value;
     }

        let book=new Book(name,author,type);
        console.log(book);

        let display=new Display();

        if(display.validate(book))
        {
            display.add(book);
            display.clear();
            console.log("success");
            display.show('success','Your book has been added sucessfully');
        }
        else
        {
            display.show('danger','Sorry you cannot add this book or feild is empty');
        }
        


    e.preventDefault();
    
}