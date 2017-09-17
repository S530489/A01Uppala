function gpa(){
    var gained_credits= grade(document.getElementById("textbox2").value) + grade(document.getElementById('textbox5').value)+grade(document.getElementById('textbox8').value);
    if(isNaN(parseInt(document.getElementById('textbox3').value))||isNaN(parseInt(document.getElementById("textbox6").value))||isNaN(parseInt(document.getElementById("textbox9").value))){
        alert("please enter only number in credits column");
        location.reload();
    }
    var total_credits= parseInt(document.getElementById('textbox3').value)+parseInt(document.getElementById('textbox6').value)+parseInt(document.getElementById('textbox9').value);
    var result= (gained_credits*3)/total_credits;
    document.getElementById('textbox10').value=result;
}

function grade(i){
    if( i == 'A'|| i == "a"){
        return 4;}
    else if(i == "B"|| i == "b"){
        return 3;}
    else if(i == "C"|| i=='c') {
        return 2;}
    else if(i == "D"|| i=='d'){
        return 1;}
    else if(i=="E"|| i=="e"){
        return 0;}
    else
        {
        alert("please enter the corrects grades from A to E");
        location.reload();
    }
}