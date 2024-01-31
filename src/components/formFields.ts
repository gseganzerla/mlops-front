import { FormDataType } from "../types/FormDataType";

export const createFormFields = (form: HTMLDivElement, data: FormDataType[]) => {

    data.forEach((element: FormDataType) => {
        
        const formGroup = createFormGroup(element)

        form.appendChild(formGroup)
    });

}

const createInput = ({ id, type = 'text' }: FormDataType): HTMLInputElement => {
    const input = document.createElement('input')
    input.classList.add('form-control')

    input.name = id
    input.id = id
    input.type = type

    return input
}

const createLabel = ({ id, label: labelText }: FormDataType): HTMLLabelElement => {
    const label = document.createElement('label')

    label.htmlFor = id
    label.innerText = labelText

    return label
}

const createFormGroup = (element: FormDataType): HTMLDivElement => {
    const formGroup = document.createElement('div')
    formGroup.classList.add('col-lg-4', 'mt-4')

    const input = createInput(element)
    const label = createLabel(element)

    formGroup.appendChild(label)
    formGroup.appendChild(input)

    return formGroup
}