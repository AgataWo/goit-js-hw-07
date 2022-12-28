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

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

// test