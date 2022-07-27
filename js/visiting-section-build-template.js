import data from "./visiting-section-db.js"
import template from "../templates/visiting-gallery.js"
import refs from './refs.js'
// console.log(template);
// console.log(data);
const { visitingSectionList: list } = refs;
// console.log(list);
const cardMarcup = template(data);
// console.log(cardMarcup);
list.insertAdjacentHTML('beforeend',cardMarcup)