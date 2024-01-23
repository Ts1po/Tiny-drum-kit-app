var numberOfDrums = document.querySelectorAll(".drum").length; 

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    //ახლა დავწერთ კოდს რომლითაც ხმას გავიგებთ
    //this is switch statment function
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}
//ამ კოდით დავამატებთ ფუნქციას ისე რო კლავიატურითაც ისმოდეს ხმა

document.addEventListener("keydown", function(event){
    playSound(event.key)
    buttonAnimation(event.key);
})

function playSound(key) {
    switch (key) {
        case "1":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "2":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "3":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "4":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "5":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "6":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "7":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();  
            break;                      
    
        default:
            console.log(key);
            break;
    }
}


function buttonAnimation(cureentKey) {
    var activeButton = document.querySelector("." + cureentKey);
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);  
}