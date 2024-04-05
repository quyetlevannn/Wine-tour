const slider = document.querySelectorAll('.slider-wrap')
const sliderWrap = document.querySelector('.container.container-slider')
const mainSlider = document.getElementById('bigSlider')
const secondSlider = document.getElementById('smallSlider')
const imgLogo = document.querySelector('.img-logo')  

var bigSlider = [
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-1.jpg',
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-3.jpg',
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-5.jpg'
]
var smallSlider = [
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-2.jpg',
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-4.jpg',
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-6.jpg'
]
var bigLogo = [
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-img-1.png',
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-img-1.png',
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/travel-slide-2.png'
]
var slideIndex = 0
mainSlider.src = bigSlider[slideIndex]
secondSlider.src = smallSlider[slideIndex]
imgLogo.src = bigLogo[slideIndex]
// slider an nut
function sliding(){
    const nextBtn = document.querySelector('.next-slider-btn') 
    const preBtn = document.querySelector('.pre-slider-btn')
    nextBtn.addEventListener('click',()=>{
        slideIndex++;
        if(slideIndex == bigSlider.length){
            slideIndex = 0
        }   
        mainSlider.src = bigSlider[slideIndex]
        secondSlider.src = smallSlider[slideIndex]
        imgLogo.src = bigLogo[slideIndex]
    });
    preBtn.addEventListener('click',()=>{
        slideIndex--;
        if(slideIndex < 0){
            slideIndex = bigSlider.length-1;
        }  
        mainSlider.src = bigSlider[slideIndex]
        secondSlider.src = smallSlider[slideIndex]
        imgLogo.src = bigLogo[slideIndex]
    })
}
sliding()

// thanh phan tram
function percentBar(){
    const trackNumber = document.querySelectorAll('.place-number')
    const barNUmber = document.querySelectorAll('.tracking-number--max')
    console.log(barNUmber)
    Array.from(trackNumber).forEach((item,index)=>{
        setTimeout(()=>{
            barNUmber[index].style.opacity =  1;
            barNUmber[index].style.width = Number(item.getAttribute('data-percentage')) + '%';
        },500)
        
    })

}
percentBar()
// ham counting number o thanh bar
function counting(){
    let valueCounts = document.querySelectorAll('.place-number')
    let interval = 0
    valueCounts.forEach((valueCount)=>{
        let startValue = 0
        let endValue = parseInt(valueCount.getAttribute('data-percentage'))
        let counter = setInterval(() => {
           startValue += 1;
           valueCount.textContent = startValue + '%'
           if(startValue == endValue){
               clearInterval(counter)
           } 
        },interval);
       

    })
}
counting()
// ham counting o thong so 
function numCounting(){
    let valueCounts = document.querySelectorAll('.wine-count--box span')
    let interval = 0
    valueCounts.forEach((valueCount)=>{
        let startValue = 0
        let endValue = parseInt(valueCount.getAttribute('data-percentage'))
        let counter = setInterval(() => {
           startValue += 1;
           valueCount.textContent = startValue;
           if(startValue == endValue){
               clearInterval(counter)
           } 
        },interval);
       

    })    
}
numCounting()


// responsive menu
function menuRespon(){
    const menuResponBtn = document.getElementById('menu-respon')
    const menuResponsive = document.querySelectorAll('.contact-menu--list')
    console.log(menuResponsive)
    menuResponBtn.addEventListener('click',()=>{
        if(menuResponsive[0].classList.contains('activeMenu')){
            menuResponsive[0].classList.remove('activeMenu')
        }    
        else{
            menuResponsive[0].classList.add('activeMenu')  
        }
   })
}
menuRespon()


