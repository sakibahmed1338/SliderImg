

const slides = document.querySelectorAll(".slide");

let counter = 0;


 slides.forEach(
    (slide,index) => {
        slide.style.left = `${index*100}%`   
     }
 )

 const goPrev = () => 
 {
    
   if(counter > 0){
    counter--
    slideImg();
   }

    
 }
 const goNext = () => 
 {
    if(counter < 10){
        counter++ 
        slideImg();
    }
        //else
    // {
    //     counter = 0;
    //     slideImg();
    // }
 }


 const slideImg = () => {
    slides.forEach (
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
 }