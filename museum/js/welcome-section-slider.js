import refs from "./refs.js"
const { wlcSecBtnPrev: btnPrev,
    wlcSecBtnNext: btnNext,
    wlcSecDotsBox: dotsSetBox,
    wlcSecDotArr: dots,
    wlcSecNumOfImg: numOfImg,
    welcomeSectionImgSet: slideArray } = refs;


let index = 0;

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

dots.forEach((dot, indexDot) => {
    dot.addEventListener('click', () => {
        index = indexDot;
        makeActive(index);
    });
});
    






function makeActiveImg(n) {
    for (const slide of slideArray) {
        slide.classList.remove('active')
        
    }
    slideArray[n].classList.add('active')
}
function makeActiveDot(n) {
    for (const dot of dots) {
        dot.classList.remove('active')
       
    }
    dots[n].classList.add('active')
}
function makeActiveNum(n) {
    numOfImg.textContent = `0${n+1} | 05`;
    
}

function makeActive(ind) {
    makeActiveImg(ind)
    makeActiveDot(ind)
    makeActiveNum(ind)
}

function nextSlide() {
    if (index === slideArray.length -1) {
        index = 0;
        makeActive(index)
    } else {
        index += 1;
        makeActive(index);
    }
}

function prevSlide() {
if (index === 0) {
        index = slideArray.length-1;
       makeActive(index)
    } else {
        index -= 1;
       makeActive(index);
    }
}

setInterval(nextSlide, 5000);