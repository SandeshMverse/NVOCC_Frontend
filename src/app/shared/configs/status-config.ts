import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";


export const statusData: RowData = {
    headers: [
        { label: "SR NO", key: "SR.NO", type: 'autoIncrementNumber', size: '5%' },
        { label: "Parent Name", key: "parent_status_name", type: '' },
        { label: "Status Name", key: "status_name", type: '' },
        { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }
    ],
    data: [],
    dataKey: 'status_id',
    buttonname: 'Add Status',
    button: true,
    statuses: [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' }
    ],
    filterfields: ['status_name'],
    isSearch: false
};

export const statusSearchGroup: IFormStructure[] = [
    {
        name: "status_id",
        label: "Status Id",
        placeholder: "Enter status id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false
    },
    {
        name: "parent_id",
        label: "Parent",
        placeholder: "Select parent",
        type: "select",
        value: "",
        bindValue: 'status_id',
        bindLabel: 'status_name',
        listName: 'parent',
        disable: false,
    },
    {
        name: "status_name",
        label: "Status Name",
        placeholder: "Enter status name",
        type: "text",
        value: "",
        required: true,
        disable: false,
    },
]

export const globalStatus: any[] = [
    // DRS
    // {
    //     id: 15,
    //     name: 'OPEN',
    // }
];


export const globalStatusIDS: any = {
    // PORT CALL
    // PORT_CALL_ClOSED: 40,
};
