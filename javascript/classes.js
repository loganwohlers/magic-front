class MTGCard {
     constructor (data){
          this.id=data.id
          this.name=data.name;
          this.artistID=data.artist.id;
          this.artistName=data.artist.name;
          this.art=data.art;
          this.likes=data.likes;
          this.colors=data.colors;
          this.flavorText=data.flavor_text;
          this.type=data.type_line
          this.setID=data.card_set.id
          this.setName=data.card_set.name;
     }

     figRender(){
          let fig=document.createElement('figure')
          fig.classList.add('figCard')
          let img=document.createElement("img");
          img.classList.add('clickable', 'forModal')
          img.src= `${this.art}`
          let caption=document.createElement('figcaption')
          caption.classList.add('caption') 
          caption.textContent=`${this.name} by: `
          let span=document.createElement('span') 
          span.classList.add('artist-span', 'clickable')
          let strong=document.createElement('strong')
          strong.textContent=`${this.artistName}`
          span.append(strong)
          caption.append(span)
          fig.append(img, caption)        
          return fig;  
     }

     colorString(){
          let colors=this.colors[0].name
          if(this.colors.length>1){
               for(let i=1; i<this.colors.length;i++){
                    colors += ` / ${this.colors[i].name} `
               }
          }
          return colors;
     }

     flavorString(){
          let flavor=""
          if(this.flavorText){
               flavor=this.flavorText
          }
          return flavor;
     }


     modalRender(){
          return `
          <div class="modal-header d-block">
          <h4class="modal-title text-center" id="exampleModalLabel">${this.name} by ${this.artistName}</h4>
               <button type="button" class="close btn btn-info" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
               </button>
     </div>
     <div class="modal-body">
          <img class='modal-img' src=${this.art}>
          <br>
          <br>
          <button type="button" class="btn btn-outline-primary like-btn" >Like (${this.likes})</button>
          <br>
          <br>
          <div class="modal-artist clickable"> 
               <h4>Artist: ${this.artistName} </h4>
          </div>
          <p> <h6>Colors: ${this.colorString()} </h6></p>
          <p>${this.flavorString()}</p>
          <div class="modal-set clickable"> 
               Set: ${this.setName} 
          </div>
     </div>
          
     </div>
     <div class="modal-footer d-block">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
     </div>
     `
     }  
}