function validateAndGenerate(form){ 
    if(validateFullName(form) && validateMemberId(form) && validateImage(form)){
        displayTextAndImage(form);
        return false; 
    }
    
}

//function to validate full name if empty
function validateFullName(form){
    var fullName = form.elements["fullName"];

    if(fullName.validity.valueMissing){
        fullName.setCustomValidity("Please enter your name here");
        return false;
    }else{
        fullName.setCustomValidity("");
        return true;
    }
}

//fucntion to validate member ID if empty and not valid
function validateMemberId(form){
    var memberId = form.elements["memberID"];

    if(memberId.validity.valueMissing){
        memberId.setCustomValidity("Please enter your member ID here");
        return false;
    }else if(memberId.validity.patternMismatch){
        memberId.setCustomValidity("A valid ID starts with 5-digit code ends with an M");
        return false;
    }else{
        memberId.setCustomValidity("");
        return true;
    }
}

//function to validate if no image is selected
function validateImage(form){
    var image = document.getElementById("image");

    if(image.selectedIndex == 0){
        image.setCustomValidity("Please select one of the images");
        return false;
    }else{
        return true;
    }
}

//function to display text and image selected in "image_target" div
function displayTextAndImage(form){
    //variables used to generate text
    var userName = form.elements["fullName"].value.toUpperCase(); 
    var userId = form.elements["memberID"].value;
    var outputText = "Hi, " + userName + " (Member ID: " + userId + ")";
    
    //variables used to display image
    var imageSelected = form.elements["image"].value;
    var imageStyle = document.getElementById("image_style");
    var imageTarget = document.getElementById('image_target');

    //to generate full name and member ID
    document.getElementById("text_target").innerText = outputText;

    //to display image 
    if(imageSelected == "images/blueberry.jpg"){
        imageStyle.style.visibility = "visible";
        imageTarget.innerHTML = '<img src="images/blueberry.jpg">';
        imageTarget.style.visibility = "visible";
    }
    else if(imageSelected == "images/strawberry.jpg"){

       imageStyle.style.visibility = "visible";
       imageTarget.innerHTML = '<img src="images/strawberry.jpg">';
       imageTarget.style.visibility = "visible";
    }
    else if(imageSelected == "images/blueberry_pancake.jpg"){
        imageStyle.style.visibility = "visible";
        imageTarget.innerHTML = '<img src="images/blueberry_pancake.jpg">';
        imageTarget.style.visibility = "visible";
    }
    else if(imageSelected == "images/strawberry_cake.jpg"){
        imageStyle.style.visibility = "visible";
        imageTarget.innerHTML = '<img src="images/strawberry_cake.jpg">';
        imageTarget.style.visibility = "visible";
    }
    else{
        imageStyle.style.visibility = "hidden";
        imageTarget.style.visibility = "hidden";
    }
}

function changeBorder(){
    var borderImg = document.getElementById("image_target");
    borderImg.style.borderRadius = "25px";
    borderImg.style.filter = 'none';
}

function changeSepiaFilter(){
    document.getElementById("image_target").style.borderRadius = "0";
    document.getElementById("image_target").style.filter = 'sepia(0.4)';
}

function changeDropShadow(){
    document.getElementById("image_target").style.borderRadius = "0";
    document.getElementById("image_target").style.filter = 'drop-shadow(15px 15px 15px darkslategray)';
}
