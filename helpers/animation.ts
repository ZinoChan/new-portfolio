// export const  animateCircle = event => {
//     let circle = document.createElement('div');
//     circle.setAttribute('class', 'star');
//     circle.style.left = event.clientX + 'px';
//     circle.style.top =  event.clientY + 'px';
//     // circle.style.borderColor= "#0f0";
//     // let size = Math.random() * 50;
//     // circle.style.width =  size + 'px';
//     // circle.style.height =  size + 'px';
//     circle.style.fontSize =  Math.random() * 10 + "px";
//     circle.style.transition = "all .5s linear 0s";
//     document.querySelector(".bubbles").appendChild(circle);

//     setTimeout(() => {
//         circle.remove();
//     }, 600)
// }

export const generateStars = () => {
    
    let $galaxy = document.querySelector('.galaxy');
    let $star = document.createElement('div');
    let iterator = 0;
    
    while (iterator <= 100){
        let xposition = Math.random();
        let yposition = Math.random();
        let star_type = Math.floor((Math.random() * 3) + 1);
     
       $star.style.top = 10 * yposition + "px";
       $star.style.left = 10 * xposition + "px";
       $star.classList.add("star")
       $star.classList.add(`star-type${star_type}`)

        $galaxy.appendChild($star);
        
        iterator++;
    }
    
};




