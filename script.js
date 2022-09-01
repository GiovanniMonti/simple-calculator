function getHistory(){
	return document.getElementById("history-value").innerText;
}

function setHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

const number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener("click",function(){
        let output=Number( getOutput() );

        if( output == NaN){
            return;
        }
        //dostuff
    })
}