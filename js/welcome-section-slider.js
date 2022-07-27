import refs from "./refs.js"
const { wlcSecBtnPrev: btnPrev,
    wlcSecBtnNext: btnNext,
    wlcSecDotsBox: dotsSetBox,
    wlcSecDotArr: dots,
    wlcSecNumOfImg: numOfImg,
    wlcSecSliderContainer: sliderContainer,
    welcomeSectionImgSet: slideArray } = refs;

let isEnabled = true;
let index = 0;

btnNext.addEventListener('click', function () {
    if (isEnabled) {
         nextSlide(index)
       
    }
});
btnPrev.addEventListener('click', function () {
    if (isEnabled) {
        prevSlide(index)
       
    }
});


function hideItem(direction, index) {
    isEnabled = false;
    slideArray[index].classList.add(direction);
    slideArray[index].addEventListener('animationend', function () {
        
        this.classList.remove('active', direction);
    });

};
function showItem(direction, index) {
    
    slideArray[index].classList.add('next', direction);
    slideArray[index].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
};


function nextSlide(n) {
        hideItem('to-left', index);
        changeCurrentItem(n + 1)
        makeActiveDot(index)
        makeActiveNum(index) 
        showItem('from-right', index);

}
function prevSlide(n) {
        hideItem('to-right', index);
    changeCurrentItem(n - 1);
    makeActiveDot(index)
    makeActiveNum(index) 
        showItem('from-left', index);
}

function changeCurrentItem(n) {
     index = (n + slideArray.length) % slideArray.length; 
  }

dots.forEach((dot, indexDot) => {
    dot.addEventListener('click', () => {
        if (indexDot < index) {
             hideItem('to-right', index) 
                 
                 changeCurrentItem(indexDot);                      
                makeActiveDot(index);
                makeActiveNum(index);
            showItem('from-left', index);
            
        } else if (indexDot > index) {
            if (isEnabled) {
                 hideItem('to-left', index) 
                 
                 changeCurrentItem(indexDot);                      
                makeActiveDot(index);
                makeActiveNum(index);
               showItem('from-right', index);
           
       
    }
            
        }

        });
});






function makeActiveDot(n) {
    for (const dot of dots) {
        dot.classList.remove('active')
        }
    dots[n].classList.add('active')
}
function makeActiveNum(n) {
    numOfImg.textContent = `0${n+1}`;
    
}
// setInterval(() => {
//      if (isEnabled) {
//          nextSlide(index)
       
//     }
// }, 5000);
const swipeListener = (elem) => {
    let surface = elem;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
    let restraint = 100;
    let allowedTime = 300;
    surface.addEventListener('mousedown', function (event) {
        startX = event.pageX;
        startY = event.pageY;
        startTime = new Date().getTime();
        event.preventDefault();

    }, false);

    surface.addEventListener('mouseup', function (event) {
        distX = event.pageX - startX;
        distY = event.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if ((distX > 0)) {
                    if (isEnabled) {
                        prevSlide(index);
                    }
                } else{
                    if (isEnabled) {
                        nextSlide(index);
                    }
                }
            }
        }
        event.preventDefault();
    }, false);

    surface.addEventListener('touchstart', function (event) {
        if (event.target.classList.contains('btn-arrow-icon') || event.target.classList.contains('btn-set')) {
            if (event.target.classList.contains('btn-next')) {
                if (isEnabled) {
                    prevSlide(index);
                }
            } else if(event.target.classList.contains('btn-prev')) {
                if (isEnabled) {
                    nextSlide(index);
                }
            }
        }
        const touchObj = event.changedTouches[0];
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
        event.preventDefault();

    }, false);

    surface.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    surface.addEventListener('touchend', function (event) {
        const touchObj = event.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startX;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if ((distX > 0)) {
                    if(isEnabled){
                        prevSlide(index);
                    }
                } else{
                    if (isEnabled) {
                        nextSlide(index);
                    }
                }
            }
        }
        event.preventDefault();
    }, false);
};
swipeListener(sliderContainer);