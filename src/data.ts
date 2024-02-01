import { FormDataType } from "./types/FormDataType.js"

export const data: FormDataType[] = [
  {
    id: 'loan_limit',
    label: 'Loan Limit',
    type: 'select',
    options: ['cf', 'ncf',]
  },

  {
    id: 'Gender',
    label: 'Gender',
    type: 'select',
    options: ['Male',]
  },

  {
    id: 'approv_in_adv',
    label: 'Approv In Adv',
    type: 'select',
    options: ['nopre', 'pre',]
  },

  {
    id: 'loan_type',
    label: 'Loan Type',
    type: 'select',
    options: ['type2', 'type3', 'type1',]
  },

  {
    id: 'loan_purpose',
    label: 'Loan Purpose',
    type: 'select',
    options: ['p1', 'p4', 'p3', 'p2',]
  },

  {
    id: 'Credit_Worthiness',
    label: 'Credit Worthiness',
    type: 'select',
    options: ['l1', 'l2', 'l',]
  },

  {
    id: 'open_credit',
    label: 'Open Credit',
    type: 'select',
    options: ['nopc', 'opc',]
  },

  {
    id: 'business_or_commercial',
    label: 'Business Or Commercial',
    type: 'select',
    options: ['b/c', 'nob/c',]
  },

  {
    id: 'loan_amount',
    label: 'Loan Amount',
    type: 'number',

  },

  {
    id: 'rate_of_interest',
    label: 'Rate Of Interest',
    type: 'number',

  },

  {
    id: 'Interest_rate_spread',
    label: 'Interest Rate Spread',
    type: 'number',

  },

  {
    id: 'Upfront_charges',
    label: 'Upfront Charges',
    type: 'number',

  },

  {
    id: 'term',
    label: 'Term',
    type: 'number',

  },

  {
    id: 'Neg_ammortization',
    label: 'Neg Ammortization',
    type: 'select',
    options: ['not_neg', 'neg_amm',]
  },

  {
    id: 'interest_only',
    label: 'Interest Only',
    type: 'select',
    options: ['not_int', 'int_only',]
  },

  {
    id: 'lump_sum_payment',
    label: 'Lump Sum Payment',
    type: 'select',
    options: ['lpsm', 'not_lpsm',]
  },

  {
    id: 'property_value',
    label: 'Property Value',
    type: 'number',

  },

  {
    id: 'construction_type',
    label: 'Construction Type',
    type: 'select',
    options: ['sb', 'mh',]
  },

  {
    id: 'occupancy_type',
    label: 'Occupancy Type',
    type: 'select',
    options: ['pr', 'ir', 'sr',]
  },

  {
    id: 'Secured_by',
    label: 'Secured By',
    type: 'select',
    options: ['home', 'land',]
  },

  {
    id: 'total_units',
    label: 'Total Units',
    type: 'select',
    options: ['1U', '4U', '2U', '3U',]
  },

  {
    id: 'income',
    label: 'Income',
    type: 'number',

  },

  {
    id: 'credit_type',
    label: 'Credit Type',
    type: 'select',
    options: ['EQUI', 'CRIF', 'CIB', 'EXP',]
  },

  {
    id: 'Credit_Score',
    label: 'Credit Score',
    type: 'number',

  },

  {
    id: 'co_applicant_credit_type',
    label: 'Co Applicant Credit Type',
    type: 'select',
    options: ['EXP', 'CIB',]
  },

  {
    id: 'age',
    label: 'Age',
    type: 'select',
    options: ['55-64', '45-54', '35-44', '>74', '25-34', '65-74', '<25',]
  },

  {
    id: 'submission_of_application',
    label: 'Submission Of Application',
    type: 'select',
    options: ['to_inst', 'not_inst',]
  },
  {
    id: 'LTV',
    label: 'Ltv',
    type: 'number',

  },
  {
    id: 'Region',
    label: 'Region',
    type: 'select',
    options: ['North', 'central', 'south', 'North-East',]
  },
  {
    id: 'Security_Type',
    label: 'Security Type',
    type: 'select',
    options: ['direct', 'Indriect',]
  },
  {
    id: 'Status',
    label: 'Status',
    type: 'select',
    options: []
  },
  {
    id: 'dtir1',
    label: 'Dtir1',
    type: 'number',

  },



]
