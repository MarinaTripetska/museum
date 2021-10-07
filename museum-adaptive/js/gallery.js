import refs from "./refs.js"

const { gallerySecContainer: container } = refs;

const imgDataPath = [
    { path: "./assets/img/gallery/gallery1.jpg", webp: "./assets/img/gallery/gallery1.webp", id: 1 },
    { path: "./assets/img/gallery/gallery2.jpg", webp: "./assets/img/gallery/gallery2.webp", id:2 },
    { path: "./assets/img/gallery/gallery3.jpg", webp: "./assets/img/gallery/gallery3.webp", id:3 },
    { path: "./assets/img/gallery/gallery4.jpg", webp: "./assets/img/gallery/gallery4.webp", id:4 },
    { path: "./assets/img/gallery/gallery5.jpg", webp: "./assets/img/gallery/gallery5.webp", id:5 },
    { path: "./assets/img/gallery/gallery6.jpg", webp: "./assets/img/gallery/gallery6.webp",id:6 },
    { path: "./assets/img/gallery/gallery7.jpg", webp: "./assets/img/gallery/gallery7.webp", id:7 },
    {path:"./assets/img/gallery/gallery8.jpg", webp: "./assets/img/gallery/gallery8.webp", id:8},
    { path: "./assets/img/gallery/gallery9.jpg", webp: "./assets/img/gallery/gallery9.webp", id:9 },
    { path: "./assets/img/gallery/gallery10.jpg", webp: "./assets/img/gallery/gallery10.webp", id:10 },
    { path: "./assets/img/gallery/gallery11.jpg", webp: "./assets/img/gallery/gallery11.webp", id:11 },
    { path: "./assets/img/gallery/gallery12.jpg", webp: "./assets/img/gallery/gallery12.webp", id:12 },
    { path: "./assets/img/gallery/gallery13.jpg", webp: "./assets/img/gallery/gallery13.webp", id:13 },
    {path:"./assets/img/gallery/gallery14.jpg", webp: "./assets/img/gallery/gallery14.webp", id:14},
    {path:"./assets/img/gallery/gallery15.jpg", webp: "./assets/img/gallery/gallery15.webp", id:15},

]
function shuffle(arr) {
 let list = [...arr]
return list.sort(() => Math.random() - 0.5)
  
}


const templateImg = Handlebars.compile(`
{{#each this}}
<li class="gallery__item">
<picture>
<source srcset="{{webp}} 1x"
          type="image/webp">
<img class="gallery__img" src="{{path}}" alt="{{id}}" />
</picture>
                
              </li>
             {{/each}} `);

   const murkup =  templateImg( shuffle(imgDataPath) )
// console.log( murkup);

container.insertAdjacentHTML('beforeend', murkup)

