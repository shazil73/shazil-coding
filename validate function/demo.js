function validatecode(){
    var a = document.getElementById("good").value
    if (a == "") {
        alert("Name must be filled out");
        return false;
    }
    console.log("Form submitted successfully with name")
}