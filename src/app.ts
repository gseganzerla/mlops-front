import { classification } from "./classification.js";
import { clusterization } from "./clusterization.js";
import { createFormFields } from "./components/formFields.js";
import { data } from "./data.js";


createFormFields(document.getElementById('fields') as HTMLDivElement, data)




$('.model').click(function () {

    const formData = new FormData(document.getElementById('form') as HTMLFormElement)
    const data = Object.fromEntries(formData)

    const model = $(this).data('model')

    if (model === 'classification') {
        classification(data)
    } else {
        clusterization(data)

    }
})

$('.faker').click(() => {
    const faker = { loan_limit: 'ncf', Gender: 'Male', approv_in_adv: 'nopre', loan_type: 'type1', loan_purpose: 'p4', Credit_Worthiness: 'l1', open_credit: 'nopc', business_or_commercial: 'nob/c', loan_amount: '676500', rate_of_interest: '3.5', Interest_rate_spread: '-0.2735', Upfront_charges: '2931.19', term: '360.0', Neg_ammortization: 'not_neg', interest_only: 'not_int', lump_sum_payment: 'not_lpsm', property_value: '1408000.0', construction_type: 'sb', occupancy_type: 'pr', Secured_by: 'home', total_units: '1U', income: '16680.0', credit_type: 'CIB', Credit_Score: '792', co_applicant_credit_type: 'CIB', age: '45-54', submission_of_application: 'to_inst', LTV: '48.046875', Region: 'North', Security_Type: 'direct', dtir1: '20.0', }


    for (const property in faker) {
        if (faker.hasOwnProperty(property)) {

            $(`#${property}`).val(faker[property])
            console.log(faker[property]);

        }
    }

})

