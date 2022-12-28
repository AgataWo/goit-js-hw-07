import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const addImages = galleryItems
.map((image)=>
`<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</div>`)
.join('');

  gallery.insertAdjacentHTML("beforeend", addImages);
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);

  if(e.target.dataset.source){
    
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1280" height="720">
`);
instance.show();
document.addEventListener("keydown", (e)=>{
  if(e.key==="Escape"){
    instance.close();
  }
    });
}console.log("no image to show");
  
  
});