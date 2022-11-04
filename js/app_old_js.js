var student = {
    name: "",
    type: "student"
};

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event){
    document.getElementById("name").addEventListener("keyup", keyUp);
    keyUp(event);
}

function keyUp(event){
    //Getting the name
    student.name = document.getElementById("name").value;

    var total = calculateNumericOutput(student.name);

    //inserting result into page
    var output = "Total numeric value: " + total;
    document.getElementById("output").innerText = output;

}

function calculateNumericOutput(stringVal){
    var totalNameValue = 0;
    for(var i=0; i <student.name.length; i++){
        totalNameValue += student.name.charCodeAt(i);
    }

    return totalNameValue;
}