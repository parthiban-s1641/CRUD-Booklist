class UI{
    

    populateItem(items){
        let html = '';
        items.forEach(function(item){
            html+=`
            <div class="col s4" id=${item.id}>
                <div class="card card-content center-align" id="singleItem">
                    <img src="${item.image}" height="120" width="120"  alt="">
                        <h5>${item.name}</h5>
                        <h6>${item.author}</h6>
        
                        <h6>  <span id="badge" class="new badge red darken-3">$${item.price}</span></h6>
                        
                        <button class="waves-effect waves-light btn modal-trigger deep-purple lighten-5" href="#modal12"><i class="edit fa fa-pencil"></i></button>

                        <button class="btn btn-small purple lighten-5" id="remove"><i class=" remove fa fa-remove"></i></button>
                </div>
            </div>
            
          `;
        });

        document.querySelector('#innerCon').innerHTML=html;
    }

    clearInputFields(){
        document.getElementById('name2').value='';
        document.getElementById('author2').value=''
        document.getElementById('price2').value='';
        document.getElementById('image2').value='';
    }
}

export const ui = new UI();