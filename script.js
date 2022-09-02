function getHistory(){
	return document.getElementById("history-value").innerText;
}

function setHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function setOutput(num){
    if (num==''){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=Number(num);
    }
}

function checkFormat(num){
    if (num == '-'){
        return '';
    }
    return num;
}

const operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener("click",function(){

        if (this.id == 'clear-all'){
            setOutput('');
            setHistory('');
            return;
        }

        var output = getOutput();
        var history = getHistory();

        if (this.id == 'clear'){
            
            if (output !=''){
                output = output.slice(0,output.length-1);
                setOutput(checkFormat(output));
            }
            else{
                history = history.slice(0,history.length-1);

                if ( isNaN(Number(history)) ){
                    setHistory(checkFormat(history));
                }
                else{
                    setHistory('');
                    setOutput(checkFormat(history));
                }

            }
            return;
        }

        if(this.id=='execute'){

            

            return;
        }

        if (output!=''){
            output+=this.id;
            setHistory(history+output);
            setOutput('');
            return;
        }

        if(output==''&&history!=''){

            if (isNaN(history[history.length-1])){

                if(this.id!='-' && history[history.length-1]!= '+' && history[history.length-1]!='-'){
                    history = history.slice(0,history.length-1);
                }

                history += this.id;
                setHistory(history);

            }
            return;
        }


    })
}

const number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener("click",function(){

        let output = Number( getOutput() );

        if( output == NaN){
            return;
        }
        output+=this.id;
        setOutput( output );
        
    })
}