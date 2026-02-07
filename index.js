let arr=['Paper.png','Rock.png','Scissor.png'];

let ind=0;
let  computer=['paper','rock','scissor'];
let computerinput='computer';


function Computer(){
     ind=Math.floor(Math.random()*3);
     computerinput=computer[ind];
     console.log(computerinput)
    document.getElementById("img").src=arr[ind];



    
    if(computerinput===userinput){
    document.getElementById("result").innerText='Tie!'
    }
   else if((computerinput==='rock' && userinput==='scissor')||(computerinput==='paper' && userinput==='rock') ||(computerinput==='scissor' && userinput==='paper')){
    document.getElementById("result").innerText='Your PC wins 😉'
   }
     else if((computerinput==='rock' && userinput==='paper')|| (computerinput==='paper' && userinput==='scissor')||(computerinput==='scissor' && userinput==='rock')){
     document.getElementById("result").innerText='You Won, looks you are smarter than your PC 🙃';
    }
     
     }




let end=false;
let count=3;
let btn = document.querySelector("button");



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






let userinput='input';


document.addEventListener('keydown',function(event){
    if(event.key==='1'){
        userinput='rock';
    }
   else  if(event.key==='2'){
          userinput='paper';
    }
    else if(event.key==='3'){
        userinput='scissor';
    }
    document.getElementById("input").innerText=userinput;
})














  
    
  

 
