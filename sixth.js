
let flag=0;
let y=1;
let next = document.getElementById('next');
next.addEventListener("click",assigner1);
let prev = document.getElementById('prev');
prev.addEventListener("click",assigner2);



function assigner1 (){
  
    flag = flag + 1;
    
    
    switcher(flag);
}
function assigner2 (){
  
    flag = flag - 1;
    
    
    switcher(flag);
}


switcher(flag);

function switcher(gg){
    let wrapper =  document.getElementsByClassName("wrapper");
   for(let i = 0 ; i<wrapper.length ; i++ ){
       wrapper[i].style.display = "none";

   }
   if(flag==wrapper.length){
    flag = 0;
    gg=0;
}
if(flag<0){
    gg=wrapper.length-1;
    flag=wrapper.length-1;
}


   
   wrapper[gg].style.display = 'block';
   

   

}
