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

const createSelect = ({ id, label, options }: FormDataType): HTMLSelectElement => {
    const createEmptyOption = () => {
        const emptyOption = document.createElement('option')
        emptyOption.selected = true
        return emptyOption
    }

    const select = document.createElement('select')
    select.classList.add('form-select')

    select.appendChild(createEmptyOption())

    options?.forEach((option: string) => {
        const optionElement = document.createElement('option')
        optionElement.innerText = option
        select.appendChild(optionElement)
    })

    return select

}

const createFormGroup = (element: FormDataType): HTMLDivElement => {
    const formGroup = document.createElement('div')
    formGroup.classList.add('col-lg-4', 'mt-4')

    let inputField
    if (element.type === 'select') {
        inputField = createSelect(element)
    }
    else {
        inputField = createInput(element)
    }

    const label = createLabel(element)

    inputField.required = true
    formGroup.appendChild(label)
    formGroup.appendChild(inputField)

    return formGroup
}