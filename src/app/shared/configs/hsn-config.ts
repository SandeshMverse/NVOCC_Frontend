import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const HSNDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: "HSN Code", key: "liner_code", type: '' },
    { label: "Rate (%)", key: "rate_in_percentage", type: '' },
    { label: "Effective From", key: "effective_from", type: 'date' },
    { label: "Effective To", key: "effective_to", type: 'date' },
    { label: "IGST (%)", key: "igst", type: '' },
    { label: "CGST (%)", key: "cgst", type: '' },
    { label: "SGST (%)", key: "sgst", type: '' },
    { label: "HSN Description", key: "hsn_description", type: '' },
    { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'hsn_id',
    "buttonname": 'Create HSN',
    "button": true,
    "statuses": [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' },
    ],
    "filterfields": [],
    "isSearch": false
}

export const HSNTypeSearchGroup: IFormStructure[] = [
    {
        name: "hsn_id",
        label: "HSN Id",
        placeholder: "Enter HSN Id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "hsn_code",
        label: "HSN Code",
        placeholder: "Enter HSN Code",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "rate_in_percentage",
        label: "Rate (%)",
        placeholder: "Enter rate in percentage",
        type: "number",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "effective_from",
        label: "Effective From",
        placeholder: "Select start date",
        type: "date",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "effective_to",
        label: "Effective To",
        placeholder: "Select end date",
        type: "date",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "igst",
        label: "IGST (%)",
        placeholder: "Enter IGST rate",
        type: "number",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "cgst",
        label: "CGST (%)",
        placeholder: "Enter CGST rate",
        type: "number",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "sgst",
        label: "SGST (%)",
        placeholder: "Enter SGST rate",
        type: "number",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "hsn_description",
        label: "HSN Description",
        placeholder: "Enter HSN description",
        type: "text",
        value: "",
        required: false,
        disable: false
    }
];

