const formData = {
    email: "",
    message: "",
};

const form =document.querySelector(".feedback-form");

window.addEventListener("load", () => {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedFormData) {
        form.email.value = savedFormData.email;
        form.message.value = savedFormData.message;
        Object.assign(formData, savedFormData);
    }
});

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);


function handleInput(event) {
    formData.email = form.email.value.trim();
    formData.message = form.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function handleSubmit (event) {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert('Fill please all fields');
        return;
}
   console.log(formData);
   localStorage.removeItem("feedback-form-state");
   form.reset();

 
}


