import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const PortDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: "Port", key: "port_name", type: '' },
    { label: "Port Code", key: "port_code", type: '' },
    { label: "Port Type", key: "port_type", type: '' },
    { label: "City Name", key: "city_name", type: '' },
    { label: "Country Name", key: "country_name", type: '' },
    { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'port_id',
    "buttonname": 'Create port ',
    "button": true,
    "statuses": [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' },
    ],
    "filterfields": ['port_name'],
    "isSearch": false
}

export const PortSearchGroup: IFormStructure[] = [
    {
        name: "port_id",
        label: "Port Id",
        placeholder: "Enter port Id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "port_name",
        label: "Port Name",
        placeholder: "Enter port name",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "port_code",
        label: "Port Code",
        placeholder: "Enter port code",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "port_type",
        label: "Port Type",
        placeholder: "Select port type",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "value",
        bindLabel: "label",
        listData: [
            { value: "International", label: "International" },
            { value: "Domestic", label: "Domestic" }
        ]
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
    }
];
