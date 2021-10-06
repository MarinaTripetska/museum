export default Handlebars.compile(`{{#each this}}
<li class="visiting__item">
    <a href={{link}} class="link card" target="_blanc" aria-label="link to google maps">
        <img class="visiting__img" src={{img}} alt={{name}} width="440">
        <h3 class="card__name">{{name}}</h3>
        <p class="card__txt1">360° Virtual Tour</p>
        <p class="card__txt2">Google Street Panorama View</p>
    </a>
</li>
{{/each}}`);
 

