import refs from './refs.js'
const { videoSecProgressVideo: progressVideo, videoSecProgressVoise: progressVoise} = refs;
    
 
progressVideo.addEventListener('input', changeRange);
progressVoise.addEventListener('input', changeRange);

function changeRange() {
   const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)` 
}