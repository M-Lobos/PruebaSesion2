
const submitForm = document.getElementById("#form");

    submitForm.addEventListener("submit", function(event){
        event.preventDefault();

        const userName = document.getElementById("#name").value;
        const userEmail = document.getElementById("#exampleFormControlInput1").value;
        const userTextArea = document.getElementById("#exampleFormControlTextarea1").value;

        console.log(userName);
        console.log(userEmail);
        console.log(userTextArea);

        submitForm.reset();
    });


