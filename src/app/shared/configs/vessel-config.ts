import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const VesselDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: " Vessel Name", key: "vessel_name", type: '' },
    { label: " Vessel Code", key: "imo_no", type: '' },
    { label: "Country", key: "country_name", type: '' },
    { label: "Vessel Code", key: "vessel_code", type: '' },
    { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'vessel_id',
    "buttonname": 'Create vessel ',
    "button": true,
    "statuses": [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' },
    ],
    "filterfields": ['vessel_name'],
    "isSearch": false
}


export const VesselSearchGroup: IFormStructure[] = [
    {
        name: "vessel_id",
        label: "Vessel Id",
        placeholder: "Enter vessel Id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "vessel_name",
        label: "Vessel Name",
        placeholder: "Enter vessel name",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "imo_no",
        label: "IMO Number",
        placeholder: "Enter IMO number",
        type: "text",
        value: "",
        required: true,
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
        name: "vessel_code",
        label: "Vessel Code",
        placeholder: "Enter vessel code",
        type: "text",
        value: "",
        required: true,
        disable: false
    }
];
