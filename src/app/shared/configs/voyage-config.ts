import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const VoyageDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: "Voyage Number", key: "voyage_no", type: '' },
    { label: "ETA", key: "estimated_arrival_datetime", type: 'date&time' },
    { label: "ETD", key: "estimated_departure_datetime", type: 'date&time' },
    { label: "ATA", key: "actual_arrival_datetime", type: 'date&time' },
    { label: "ATD", key: "actual_departure_datetime", type: 'date&time' },
    { label: "Port Name", key: "port_name", type: '' },
    { label: "Terminal Name", key: "terminal_id", type: '' },
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

export const VoyageSearchGroup: IFormStructure[] = [
    {
        name: "voyage_id",
        label: "Voyage Id",
        placeholder: "Enter voyage Id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "vessel_id",
        label: "Vessel",
        placeholder: "Select vessel",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "vessel_id",
        bindLabel: "vessel_name",
        listName: "vessel",
        listData: []
    },
    {
        name: "voyage_no",
        label: "Voyage Number",
        placeholder: "Enter voyage number",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "actual_arrival_datetime",
        label: "Actual Arrival Date & Time",
        placeholder: "Select actual arrival date and time",
        type: "date-time",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "actual_departure_datetime",
        label: "Actual Departure Date & Time",
        placeholder: "Select actual departure date and time",
        type: "date-time",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "estimated_arrival_datetime",
        label: "Estimated Arrival Date & Time",
        placeholder: "Select estimated arrival date and time",
        type: "date-time",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "estimated_departure_datetime",
        label: "Estimated Departure Date & Time",
        placeholder: "Select estimated departure date and time",
        type: "date-time",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "port_id",
        label: "Port",
        placeholder: "Select port",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "port_id",
        bindLabel: "port_name",
        listName: "port",
        listData: []
    },
    {
        name: "terminal_id",
        label: "Terminal",
        placeholder: "Select terminal",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "terminal_id",
        bindLabel: "terminal_name",
        listName: "terminal",
        listData: []
    },
    {
        name: "service_id",
        label: "Service",
        placeholder: "Select service",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: "service_id",
        bindLabel: "service_name",
        listName: "service",
        listData: []
    },
    {
        name: "via_no",
        label: "Via Number",
        placeholder: "Enter via number",
        type: "text",
        value: "",
        required: false,
        disable: false
    }
];
