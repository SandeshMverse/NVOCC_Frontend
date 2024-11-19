import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const LinerDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: "Liner Name", key: "liner_name", type: '' },
    { label: "Liner Code", key: "liner_code", type: '' },
    { label: "Description", key: "description", type: '' }, { label: "Country Code", key: "country_code", type: '' },
    { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'liner_id',
    "buttonname": 'Create liner',
    "button": true,
    "statuses": [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' },
    ],
    "filterfields": [],
    "isSearch": false
}

export const LinerSearchGroup: IFormStructure[] = [
    {
        name: "liner_id",
        label: "Liner Id",
        placeholder: "Enter liner Id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "liner_name",
        label: "Liner Name",
        placeholder: "Enter liner name",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "liner_code",
        label: "Liner Code",
        placeholder: "Enter liner code",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "description",
        label: "Description",
        placeholder: "Enter description",
        type: "text",
        value: "",
        required: false,
        disable: false
    }
];
