let opscore=document.querySelector("#opscore")
let boxes=document.querySelector("#boxes")
let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let scissors=document.querySelector("#scissors")
let myscore=document.querySelector("#myscore")
let opponent=document.querySelector("#opponent")
let me=document.querySelector("#me")
let choices=["rock", "paper", "scissors"]

rock.addEventListener("click", function(){
    opponent.src=choices[Math.floor(Math.random()*3)]+".png"
    me.src=rock.src
    if (opponent.src==paper.src){
    opscore.textContent= +opscore.textContent+1
    }
    if (opponent.src==scissors.src){
        myscore.textContent= +myscore.textContent+1
    }
})
paper.addEventListener("click", function(){
    opponent.src=choices[Math.floor(Math.random()*3)]+".png"
    me.src=paper.src
    if (opponent.src==scissors.src){
        opscore.textContent= +opscore.textContent+1
        }
     if (opponent.src==rock.src){
            myscore.textContent= +myscore.textContent+1
        }
})
scissors.addEventListener("click", function(){
    opponent.src=choices[Math.floor(Math.random()*3)]+".png"    
    me.src=scissors.src
    if (opponent.src==rock.src){
        opscore.textContent= +opscore.textContent+1
        }
     if (opponent.src==paper.src){
            myscore.textContent= +myscore.textContent+1
        }
})