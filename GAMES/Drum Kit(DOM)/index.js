for (var i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
            var soundName = this.innerHTML;
           makesonud(soundName);
           changecolor(soundName);
    })
    }
    
    document.addEventListener("keypress",function (event)
    {
            makesonud(event.key);
            changecolor(event.key);
            console.log(" '"+event.key+"' word pressed through keyboard")
    
    })
    
    
    function makesonud(key){
            switch(key){
                    case "w":
                            var audio =  new Audio("sounds/tom-1.mp3");
                            audio.play();        
                            break;
                    case "a":
                            var audio = new Audio("sounds/tom-2.mp3");
                            audio.play();
                            break;
                    case "s":
                            var audio = new Audio("sounds/tom-3.mp3");
                            audio.play();
                            break;
                    case "d":
                            var audio = new Audio("sounds/tom-4.mp3");
                            audio.play();
                            break;
                    case "j":
                            var audio = new Audio("sounds/crash.mp3");
                            audio.play();
                            break;
                    case "k":
                            var audio = new Audio("sounds/kick-bass.mp3");
                            audio.play();
                            break;
                    case "l":
                            var audio = new Audio("sounds/snare.mp3");
                            audio.play();
                            break;
                    default: console.log(soundName+"please enter valid sound");
                            break;
            }
    }
    
    
    function changecolor(key){
            let element = document.documentElement.querySelector("." + key);
    
        if (element) { 
            element.style.color = "yellow";
            element.classList.add("pressed");
    
            setTimeout(() => {
                element.classList.remove("pressed");
                element.style.color = "#DA0463"; 
            }, 100);
        }
    }