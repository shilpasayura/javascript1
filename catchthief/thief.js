const square1 = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let msg = document.querySelector('#msg')
let score = document.querySelector('#score')
let r = 0
const duration=10;
let interval=1000;
debugger;
msg.textContent="OK , Start Now";
timeLeft.textContent = duration
       
// pop mole randomly

function randomsq(){
    square1.forEach(c => {
        c.classList.remove("mole");
    })
    i = Math.floor(Math.random()*9);
    square1[i].classList.add("mole");
    hitid = square1[i].id;
	msg.textContent="";
}

setInterval(() => {
    randomsq()
}, interval)

// check if hit add to score

square1.forEach(i=>{
    i.addEventListener("mouseup",()=>{
        if(i.id===hitid){
           r++;
           score.textContent = r;
		   msg.textContent="Got you!";
        }
    })
})

// timer

t = timeLeft.textContent
setInterval(() => {
    t--
    timeLeft.textContent = t
    if(t === 0)
    {
		msg.textContent="Game Over: Score is "+ r;
		
        timeLeft.textContent = duration
        t=duration
		if (interval > 300){
			interval=interval-100;
		}
    }
}, interval)

// reset

const reset = document.querySelector("#reset")
reset.addEventListener("click",function(){
    score.textContent = 0;
    timeLeft.textContent = duration;
    t=duration;
	msg.textContent="OK, Start";
})