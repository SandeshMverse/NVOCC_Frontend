import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const LocationDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: "Location Name", key: "location_name", type: '' },
    { label: "Location Code", key: "code", type: '' },
    { label: "Is Depo", key: "is_depo", type: 'statusesYesNo' },
    { label: "Is CFS", key: "is_cfs", type: 'statusesYesNo' },
    { label: "Is Terminal", key: "is_terminal", type: 'statusesYesNo' },
    { label: "Is ICD", key: "is_icd", type: 'statusesYesNo' },
    { label: "Is Yard", key: "is_yard", type: 'statusesYesNo' },
    { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'location_id',
    "buttonname": 'Create Location ',
    "button": true,
    "statuses": [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' },
    ],
    "filterfields": ['city location_name'],
    "isSearch": false
}

export const LocationSearchGroup: IFormStructure[] = [
    {
        name: "location_id",
        label: "Location Id",
        placeholder: "Enter location Id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "location_name",
        label: "Location Name",
        placeholder: "Enter location name",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "code",
        label: "Code",
        placeholder: "Enter code",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "address_1",
        label: "Address Line 1",
        placeholder: "Enter address line 1",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "address_2",
        label: "Address Line 2",
        placeholder: "Enter address line 2",
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
        name: "is_depo",
        label: "Is Depo?",
        placeholder: "Select yes or no",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: true, label: "Yes" },
            { value: false, label: "No" }
        ]
    },
    {
        name: "is_cfs",
        label: "Is CFS?",
        placeholder: "Select yes or no",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: true, label: "Yes" },
            { value: false, label: "No" }
        ]
    },
    {
        name: "is_terminal",
        label: "Is Terminal?",
        placeholder: "Select yes or no",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: true, label: "Yes" },
            { value: false, label: "No" }
        ]
    },
    {
        name: "is_icd",
        label: "Is ICD?",
        placeholder: "Select yes or no",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: true, label: "Yes" },
            { value: false, label: "No" }
        ]
    },
    {
        name: "is_yard",
        label: "Is Yard?",
        placeholder: "Select yes or no",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: true, label: "Yes" },
            { value: false, label: "No" }
        ]
    }
];
