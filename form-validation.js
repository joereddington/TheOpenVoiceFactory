//Select form
var formEl = document.querySelectorAll('.file-submit')[0];

//Add function to handle change events
formEl.addEventListener("change", function(){
    //Select form elements and store in var
    var fileEl = document.querySelectorAll('#fileToUpload')[0];
    var sizeEl = document.querySelectorAll('input.size');
    var submitEl = document.querySelectorAll('button.button')[0];

    //Init the validation boolean
    var formValid = true;

    //Mark form as invalid if no file is selected
    if(!fileEl.value) {
        formValid = false;
    }

    //Mark form as invalid if no radiobutton is selected
    //Init size valid variable
    var sizeValid = false;
    //Check all radio buttons for values
    for(var x=0; x < sizeEl.length; x++) {
        if(sizeEl[x].checked) {
            //If any is selected, say it's valid
            sizeValid = true;
        }
    }
    //If none was selected, the form is not valid
    if(!sizeValid) {
        formValid = false;
    }

    //Set submit button state based on form validation
    if(formValid) {
        submitEl.disabled = false;
    } else {
        submitEl.disabled = true;
    }
});
