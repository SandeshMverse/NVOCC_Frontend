import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const CustomerDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: "Customer Name", key: "customer_name", type: '' },
    { label: "Email ID", key: "email_id", type: '' },
    { label: "Contact Number", key: "contact_no", type: '' },
    { label: "Is Group Companies?", key: "is_group_companies", type: 'statusesYesNo' },
    { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'customer_id',
    "buttonname": 'Create customer ',
    "button": true,
    "statuses": [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' },
    ],
    "filterfields": ['customer_name'],
    "isSearch": false
}

export const CustomerSearchGroup: IFormStructure[] = [
    {
        name: "customer_id",
        label: "Customer ID",
        placeholder: "Enter customer ID",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "customer_name",
        label: "Customer Name",
        placeholder: "Enter customer name",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "address_1",
        label: "Address Line 1",
        placeholder: "Enter address line 1",
        type: "textarea",
        value: "",
        required: true,
        disable: false,
        maxLength: 100
    },
    {
        name: "address_2",
        label: "Address Line 2",
        placeholder: "Enter address line 2",
        type: "textarea",
        value: "",
        required: false,
        disable: false,
        maxLength: 100
    },
    {
        name: "email_id",
        label: "Email ID",
        placeholder: "Enter email ID",
        type: "text",
        value: "",
        required: true,
        disable: false,
        validationFor: 'email'
    },
    {
        name: "contact_no",
        label: "Contact Number",
        placeholder: "Enter contact number",
        type: "text",
        value: "",
        required: true,
        disable: false,
        validationFor: 'contact'
    },
    {
        name: "customer_type_id",
        label: "Customer Type",
        placeholder: "Select customer type",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "customer_type_id",
        bindLabel: "customer_type_name",
        listName: "customer_type",
        listData: []
    },
    {
        name: "gstin_no",
        label: "GSTIN Number",
        placeholder: "Enter GSTIN number",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "vat_no",
        label: "VAT Number",
        placeholder: "Enter VAT number",
        type: "text",
        value: "",
        required: false,
        disable: false
    },
    {
        name: "country_id",
        label: "Country",
        placeholder: "Select country",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "country_id",
        bindLabel: "country_name",
        listName: "country",
        listData: []
    },
    {
        name: "state_id",
        label: "State",
        placeholder: "Select state",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "state_id",
        bindLabel: "state_name",
        listName: "state",
        listData: []
    },
    {
        name: "city_id",
        label: "City",
        placeholder: "Select city",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "city_id",
        bindLabel: "city_name",
        listName: "city",
        listData: []
    },
    {
        name: "pincode",
        label: "Pincode",
        placeholder: "Enter pincode",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "pan_no",
        label: "PAN Number",
        placeholder: "Enter PAN number",
        type: "text",
        value: "",
        required: false,
        disable: false
    },
    {
        name: "contact_person_name",
        label: "Contact Person Name",
        placeholder: "Enter contact person name",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "contact_person_no",
        label: "Contact Person Number",
        placeholder: "Enter contact person number",
        type: "text",
        value: "",
        required: true,
        disable: false,
        validationFor: 'contact'
    },
    {
        name: "sales_name",
        label: "Sales Name",
        placeholder: "Enter sales name",
        type: "text",
        value: "",
        required: false,
        disable: false
    },
    {
        name: "sales_code",
        label: "Sales Code",
        placeholder: "Enter sales code",
        type: "text",
        value: "",
        required: false,
        disable: false
    },
    {
        name: "sales_location",
        label: "Sales Location",
        placeholder: "Enter sales location",
        type: "text",
        value: "",
        required: false,
        disable: false
    },
    {
        name: "sales_effective_date",
        label: "Sales Effective Date",
        placeholder: "Select sales effective date and time",
        type: "date-time",
        value: "",
        required: false,
        disable: false
    },
    {
        name: "is_group_companies",
        label: "Is Group Companies?",
        placeholder: "Select yes or no",
        type: "select",
        value: "",
        required: false,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: 0, label: "False" },
            { value: 1, label: "True" }
        ]
    },
    {
        name: "is_kyc",
        label: "Is KYC?",
        placeholder: "Select yes or no",
        type: "select",
        value: "",
        required: false,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: 0, label: "False" },
            { value: 1, label: "True" }
        ]
    }
];
