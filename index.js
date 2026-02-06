let arr=['Paper.png','Rock.png','Scissor.png'];

let text="Timer";


function Computer(){
     
    document.getElementById("img").src=arr[Math.floor(Math.random()*3)];
     
     }
let end=false;
let count=3;
let btn = document.querySelector("button");
console.log(btn)
btn.addEventListener('click',function(){
   
    if(end==false){
        let timerid = setInterval(Timer,1000);
        function Timer(){
            if(count<=0){
                clearInterval(timerid);
                Computer();
                document.getElementById("timer").innerText='Timer';
                document.getElementById("btn").innerText='Retry';  
                
                end=true;
            }
            else{
                document.getElementById("timer").innerText=count;
                count--;
            }
        }
    }
    else{
        document.getElementById("timer").innerText='Timer';
        count=3;
        document.getElementById("btn").innerText="Start";
        end=false;
    }

  
})

// game logic





  
    l
  

 
