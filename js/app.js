
const form = document.querySelector("#rForm");
const uName = document.querySelector("#name");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const date = document.querySelector("#date");
const comment = document.querySelector("#comment");
const image = document.querySelector("#image");
const gender = document.querySelector("#gender");

// ADD SUBMIT EVENT
form.addEventListener("submit", function(e){
    e.preventDefault();

    // VALIDATE THE FORM
    validate();
});



// ERROR FUNCTION
function error(element, msg)
{
    let formGroup = element.parentElement;
    formGroup.classList.add("error");
    let smallTag = formGroup.querySelector("small");
    smallTag.textContent = msg;
}

// SUCCESS FUNCTION
function success(element)
{
    let formGroup = element.parentElement;
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
}


// VALIDATION FUNCTION
function validate()
{
    // Validate Name Field
    if(uName.value === "")
    {
        error(uName, "Name field is required!");
    }else if(uName.value.length < 5)
    {
        error(uName, "Name must be atleast 5 characters!");
    }else
    {
        success(uName);
    }



    // Validate Phone Field
    if(phone.value === "")
    {
        error(phone, "Phone field is required!");
    }else
    {
        success(phone);
    }



    // Validate Address Field
    if(address.value === "")
    {
        error(address, "Address field is required!");
    }else
    {
        success(address);
    }



    // Validate date Field
    if(date.value === "")
    {
        error(date, "Date field is required!");
    }else
    {
        success(date);
    }



    // Validate comment Field
    if(comment.value === "")
    {
        error(comment, "Comment field is required!");
    }else
    {
        success(comment);
    }


    // Validate image Field
    if(image.value === "")
    {
        error(image, "Image field is required!");
    }else
    {
        success(image);
    }




        // Validate gender Field
        if(gender.value === "")
        {
            error(gender, "Gender field is required!");
        }else
        {
            success(gender);
        }
}

