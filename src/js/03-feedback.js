import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea")
}

formData = {
    email: "",
    message: ""
};

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

rewriteFormWhenReboot();

function onFormSubmit(event) {
    
    event.preventDefault();
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedFormData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput() {

    formData.email = refs.email.value;
    formData.message = refs.textarea.value;
    // console.log(formData);
    const formDataJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJson);
}

function rewriteFormWhenReboot() {

    const savedFormData= JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFormData) {
        refs.textarea.value = savedFormData.message;
        refs.email.value = savedFormData.email;
    }
}


