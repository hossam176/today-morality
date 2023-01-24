const overlay = document.querySelector(".overlay")
const btn = document.querySelector(".hover-btn2")
window.addEventListener('mousemove', (e) =>{
    const {clientX,clientY}= e;
    const x = Math.round((clientX/window.innerWidth)*100);
    const y = Math.round((clientY/window.innerHeight)*100);
    gsap.to(overlay,{
        '--x':`${x}%`,
        '--y':`${y}%`,
        duration: 0.3,
        ease: 'sine.out'

    })

})
btn.addEventListener('click', () =>{
    overlay.classList.toggle('open')
    headers.forEach(header=>{
        header.innerHTML= qoate.text
        viewMoral(header)
    })
})
/*-----------------------------------------------------------*/
const headers = document.querySelectorAll('h1');
const qoate ={
    'text':"never let them change you"
}
const viewMoral = header =>{
    const originalContent= header.innerHTML;
    var num =0;
    const addinterval = setInterval(()=>{
        num=num+1;
        header.innerHTML = originalContent.substring(0,num)
        if(originalContent == header.innerHTML){
         clearInterval(addinterval)   
        }
    },100)
   btn.style.display = 'none'
    
}
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});




