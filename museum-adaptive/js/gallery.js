import refs from "./refs.js"

const { gallerySecContainer: container } = refs;

const imgDataPath = [
    { path: "./assets/img/gallery/gallery1.jpg", id: 1 },
    { path: "./assets/img/gallery/gallery2.jpg", id:2 },
    { path: "./assets/img/gallery/gallery3.jpg", id:3 },
    { path: "./assets/img/gallery/gallery4.jpg", id:4 },
    { path: "./assets/img/gallery/gallery5.jpg", id:5 },
    { path: "./assets/img/gallery/gallery6.jpg", id:6 },
    { path: "./assets/img/gallery/gallery7.jpg", id:7 },
    {path:"./assets/img/gallery/gallery8.jpg", id:8},
    { path: "./assets/img/gallery/gallery9.jpg", id:9 },
    { path: "./assets/img/gallery/gallery10.jpg", id:10 },
    { path: "./assets/img/gallery/gallery11.jpg", id:11 },
    { path: "./assets/img/gallery/gallery12.jpg", id:12 },
    { path: "./assets/img/gallery/gallery13.jpg", id:13 },
    {path:"./assets/img/gallery/gallery14.jpg", id:14},
    {path:"./assets/img/gallery/gallery15.jpg", id:15},

]
function shuffle(arr) {
 let list = [...arr]
return list.sort(() => Math.random() - 0.5)
  
}


const templateImg = Handlebars.compile(`
{{#each this}}
<li class="gallery__item">
                <img slass="gallery__img" src="{{path}}" alt="{{id}}" />
              </li>
             {{/each}} `);

   const murkup =  templateImg( shuffle(imgDataPath) )
// console.log( murkup);

container.insertAdjacentHTML('beforeend', murkup)

