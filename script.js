
let second = document.querySelector(".second input")
let button = document.querySelector(".b")


let randomvalue = Math.floor(Math.random()*100 + 1)
console.log(randomvalue)

button.addEventListener("click", (evt) => {
    evt.preventDefault();
    let firstval = document.querySelector(".first input")
    answer1  = firstval.value
    console.log(answer1)
    let secondval = document.querySelector(".second input")
    answer2 = secondval.value
    console.log(answer2)
    if(answer1=="isha"|| answer1=="megh" ||answer1=="Isha"|| answer1=="Megh"&& answer2=="isha"||answer2=="megh" ||answer2=="Isha"||answer2=="Megh")
    {
        disable()
        let text = document.querySelector("#a")
        text.innerText = `${answer1} Loves ${answer2}`
        let para = document.querySelector("#b")
        para.innerText=`100% j hoy ne sharam kar sharam`
    }
    else{
        Result(); 
    }
  
})

 let Result = ()=>{
    case1();
   disable();
   let text = document.querySelector("#a")
    text.innerText = `${answer1} Loves ${answer2}`
    let para = document.querySelector("#b")
    para.innerText=`${randomvalue} %`
 }

 let disable =()=>
 {
    let text = document.querySelector(".result")
    let ans = text.classList.remove("hide")
 }
