import { classification } from "./classification.js";
import { createFormFields } from "./components/formFields.js";
import { data } from "./data.js";
createFormFields(document.getElementById('classification-fields'), data);
createFormFields(document.getElementById('clusterization-fileds'), data);
$('#form-classification').submit(event => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('form-classification'));
    const data = Object.fromEntries(formData);
    console.log(data);
    classification(data);
});
