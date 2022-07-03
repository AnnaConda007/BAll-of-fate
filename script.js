let newelement = document.querySelector("p");





let butt= document.querySelector("button");


butt.addEventListener("click", function(){
    let random = Math.round(Math.random() * (4 - 1) + 1)
if(random === 1){ newelement.innerHTML=  "да"}
if(random === 2){newelement.innerHTML=  "нет"  }
if(random === 3){newelement.innerHTML=  "возможно"  }
if(random === 4){newelement.innerHTML=  "неа"  }
if(random === 5){newelement.innerHTML=   "конечно"  }
if(random === 6){newelement.innerHTML=  "это вряд ли"  }
if(random === 7){newelement.innerHTML=  "в другой раз"  }
if(random === 8){newelement.innerHTML=  "все получится"  }
if(random === 8){newelement.innerHTML=   "не знаю" }
if(random === 10){newelement.innerHTML=   "а как иначе" }


})
