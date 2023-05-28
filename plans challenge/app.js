let plan =document.getElementsByClassName("plan");
let user =document.getElementById("user");
let group=document.getElementById("group");
let project=document.getElementById("project");

function addvalue(event){

if((event.target===plan[0])||(event.target.parentElement===plan[0])||(event.target.parentElement.parentElement===plan[0])){
user.value="13";
group.value="35";
project.value="5";
}

else if((event.target===plan[1])||(event.target.parentElement===plan[1])||(event.target.parentElement.parentElement===plan[1])){
    user.value="40";
    group.value="120";
    project.value="19";
    }


else if((event.target===plan[2])||(event.target.parentElement===plan[2])||(event.target.parentElement.parentElement===plan[2])){
    user.value="100";
    group.value="200";
    project.value="50";
    }


   else{
    user.value="0";
group.value="0";
project.value="0";
   }

    }





document.addEventListener("mouseover",addvalue);