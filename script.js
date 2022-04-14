//on click of button calculate the interest and display the result
function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0){
        alert('Enter a positive number');
        document.getElementById('principal').focus();
    }
    else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var amount =interest + principal
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = 
    `If you deposit <span style="color:darkred">${principal} </span><br/>
    at an interest rate of <span style="color:darkred">${rate} </span>. <br/>
    You will receive an amount of <span style="color:darkred">${interest} </span>, <br/> 
    in the year <span style="color:darkred">${year} </span>`
    }
}

//display range dynamically based on slider
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}

