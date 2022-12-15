import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const addImages = galleryItems
.map((image)=>
`<a class="gallery__item" href="${image.original}">
<img class="gallery__image" data-source="${image.original}" src="${image.preview}" alt="${image.description}" />
</a>`
)
.join('');

gallery.insertAdjacentHTML("beforeend", addImages);

gallery.addEventListener("click", (e) => {
    e.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1280" height="720">
`);

  instance.show();
  document.addEventListener("keydown", (e)=>{
if(e.key==="Escape"){
  instance.close();
}
  });
let galleryLbox = new SimpleLightbox('.gallery a').next();
});