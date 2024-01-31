export const createFormFields = (form, data) => {
    data.forEach((element) => {
        const formGroup = createFormGroup(element);
        form.appendChild(formGroup);
    });
};
const createInput = ({ id, type = 'text' }) => {
    const input = document.createElement('input');
    input.classList.add('form-control');
    input.name = id;
    input.id = id;
    input.type = type;
    return input;
};
const createLabel = ({ id, label: labelText }) => {
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelText;
    return label;
};
const createFormGroup = (element) => {
    const formGroup = document.createElement('div');
    formGroup.classList.add('col-lg-4', 'mt-4');
    const input = createInput(element);
    const label = createLabel(element);
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    return formGroup;
};
