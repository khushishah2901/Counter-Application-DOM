let counterelementEl=document.getElementById("counterelement");


function ondecriment(){
    let counter=counterelementEl.textContent;
    let updatedcounter=parseInt(counter);
    counterelementEl.textContent=updatedcounter-1;
    
    if(parseInt(counterelementEl.textContent)<0){
        counterelementEl.style.color="red";
    }
    else if(parseInt(counterelementEl.textContent)>0){
        counterelementEl.style.color="green";
        

    }
    else{
        counterelementEl.style.color="black";
    }


}

function onReset(){
    counterelementEl.textContent="0";
    
        if (parseInt(counterelementEl.textContent) === 0) {
            counterelementEl.style.color = "white";
        }
        
        else if (parseInt(counterelementEl.textContent) < 0) {
            counterelementEl.style.color = "red";
        } else {
            counterelementEl.style.color = "green";
        }
    }



function onincrement(){
    let counter=counterelementEl.textContent;
    let updatedcounter=parseInt(counter);
    counterelementEl.textContent=updatedcounter+1;
    if(parseInt(counterelementEl.textContent)<0){
        counterelementEl.style.color="red";
    }
    else if(parseInt(counterelementEl.textContent)>0){
        counterelementEl.style.color="green";
        

    }
    else{
        counterelementEl.style.color="black";
    }

}