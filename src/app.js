
import { http } from "./easyHttp3";
import { ui } from "./ui";

// getPost


// get post on dom loaded

document.addEventListener("DOMContentLoaded",getBooks);

function getBooks(){

  http.get(`http://localhost:3000/books`)
     .then(res =>{
      ui.populateItem(res);
     })
     .catch(err =>{
       console.log(err);
     })

}

document.getElementById('saveBtn').addEventListener("click",PostData);

function PostData(e){
  e.preventDefault();


  const name   = document.getElementById('bookname').value;
  const author = document.getElementById('author').value;
  const price  = document.getElementById('price').value;
  const image  = document.getElementById('image').value;

  const data = {
    name,
    author,
    price,
    image
  }

  if (name!=''||author!=''||price!=''||image!='') {
    
    http.post('http://localhost:3000/books',data)
        .then(res =>{
          console.log(res);
            getBooks();

            ui.clearInputFields();
        })
        .catch(err =>{
          console.log(err);
        })
  }
}



// remove Books

document.querySelector('.container').addEventListener("click",RemoveItem);

function RemoveItem(e){
  if (e.target.classList.contains('remove')) {

    let id = e.target.parentElement.parentElement.parentElement.id;
    
    // delete Item
    http.delete(`http://localhost:3000/books/${id}`)
        .then(res =>{
          console.log(res);
          getBooks();
        })
        .catch(err =>{
          console.log(err);
        })
  }
}

// edit item
document.querySelector('.container').addEventListener("click",EditItems);

function EditItems(e){
  e.preventDefault();

  let id = e.target.parentElement.parentElement.parentElement.id;


  // get update values



  if (e.target.classList.contains('edit')) {
    
    // update values

    document.querySelector('#saveBtn2').addEventListener("click",function(e){
      e.preventDefault();

      const name = document.getElementById('name2').value;
      const author = document.getElementById('author2').value;
      const price = document.getElementById('price2').value;
      const image = document.getElementById('image2').value;
    
      const data = {
        name,
        author,
        price,
        image
      }

      http.put(`http://localhost:3000/books/${id}`,data)
        .then(res =>{
          console.log(res);
          getBooks();
            ui.clearInputFields();
        })
        .catch(err =>{
          console.log(err);
        });

    })
  }

}