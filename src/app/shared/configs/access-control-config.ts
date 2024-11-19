import { IFormStructure } from "@shared/models/form-model"
import { RowData } from "@shared/models/table-model"

export const PagePermissionDetailsData: RowData = {
    "headers": [
        { label: "", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
        { label: "Page Name", key: "page_name", type: 'text' },
        { label: "Permission", key: "permission", type: 'text' },
        { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }
    ],
    "data": [
    ],
    "dataKey": 'page_permission_id',
    "buttonname": 'Create Permission',
    "button": true,
    "statuses": [
        { label: 'inactive', value: 'danger' },
        { label: 'active', value: 'success' }
    ],
    "filterfields": ['page_id', 'page_permission_id', 'page_name'],
    "isSearch": false
}

export const PageDetailsData: RowData = {
    "headers": [
        { label: "SR.NO", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
        { label: "Page Name", key: "page_name", type: 'text' },
        { label: "Page URL", key: "page_url", type: 'text' },
        { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }
    ],
    "data": [],
    "dataKey": 'page_id',
    "buttonname": 'Create Page',
    "button": true,
    "statuses": [
        { label: 'inactive', value: 'danger' },
        { label: 'active', value: 'success' }
    ],
    "filterfields": ['parent_id', 'page_name', 'page_url', 'mobile_url'],
    "isSearch": false
}

export const PermissionDetailsData: RowData = {
    "headers": [{ label: "", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' }, { label: "Permission", key: "permission", type: '' }, { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'permission_id',
    "buttonname": 'Create Permission',
    "button": true,
    "statuses": [
        { label: 'false', value: 'danger' },
        { label: 'true', value: 'success' },
    ],
    "filterfields": ['permission'],
    "isSearch": false
}

export const RoleDetailsData: RowData = {
    headers: [
        { label: '', key: 'SR.NO', type: 'autoIncrementNumber', size: '4%' },
        { label: 'Role Name', key: 'role_name', type: '' },
        { label: 'Action', key: 'action', type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }
    ],
    data: [],
    dataKey: 'role_id',
    buttonname: 'Create Role',
    button: true,
    statuses: [
        { label: 'Active', value: 'success' },
        { label: 'Inactive', value: 'danger' }
    ],
    filterfields: ['role_name', 'description'],
    isSearch: false
};

export const RolePermissionDetailsData: RowData = {
    headers: [
        { label: '', key: 'SR.NO', type: 'autoIncrementNumber', size: '4%' },
        { label: 'Role Name', key: 'role_name', type: '' },
        { label: 'Page Name', key: 'page_name', type: '' },
        { label: 'Description', key: 'description', type: '' },
        { label: 'Action', key: 'action', type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }
    ],
    data: [],
    dataKey: 'role_page_permission_id',
    buttonname: 'Create Role',
    button: true,
    statuses: [
        { label: 'Active', value: 'success' },
        { label: 'Inactive', value: 'danger' }
    ],
    filterfields: ['role_name', 'description'],
    isSearch: false
};

export const PagePermissionSearchGroup: IFormStructure[] = [
    {
        name: "page_id",
        label: "Pages",
        placeholder: "Enter service type",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindMultiple: false,
        bindValue: 'page_id',
        bindLabel: 'page_name',
        listName: 'page-id',
        listData: []
    },
    {
        name: "permission_id",
        label: "Permission",
        placeholder: "Enter permission",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindMultiple: true,
        bindValue: 'permission_id',
        bindLabel: 'permission',
        listName: 'permission-id',
        listData: [],
    },
]

export const PageFormStructure: IFormStructure[] = [
    {
        name: "page_name",
        label: "Page Name",
        placeholder: "Enter page name",
        type: "text",
        value: "",
        required: true,
        disable: false,
        maxLength: 100
    },
    {
        name: "page_url",
        label: "Page URL",
        placeholder: "Enter page URL",
        type: "text",
        value: "",
        required: true,
        disable: false,
        maxLength: 100
    }
]

export const PermissionGroup: IFormStructure[] = [
    {
        name: "permission",
        label: "Permission",
        placeholder: "Enter permission",
        type: "text",
        value: "",
        required: true,
        disable: false,
    }
]

export const RoleGroup: IFormStructure[] = [
    {
        name: "role_name",
        label: "Role name",
        placeholder: "Role name",
        type: "text",
        value: "",
        required: true,
        disable: false
    },
    {
        name: "menu_id",
        label: "Based On",
        placeholder: "Based On",
        type: "select",
        value: "",
        bindValue: 'menu_id',
        bindLabel: 'role_type',
        listName: 'menu-set',
        required: true,
        disable: false,
    },
]

export const RolePagePermissionGroup: IFormStructure[] = [
    {
        name: "permission",
        label: "permission",
        placeholder: "permission",
        type: "number",
        value: "",
        disable: false,
        hiddenControl: true
    },
    {
        name: "role_id",
        label: "Role",
        placeholder: "Enter role",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: 'role_id',
        bindLabel: 'role_name',
        listName: 'role-id',
        listData: []
    },
    {
        name: "page_id",
        label: "Pages",
        placeholder: "Enter service type",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindValue: 'page_id',
        bindLabel: 'page_name',
        listName: 'page-id',
        listData: []
    },
    {
        name: "permission_id",
        label: "Permission",
        placeholder: "Enter permission",
        type: "select",
        value: "",
        required: true,
        disable: false,
        bindMultiple: true,
        bindValue: 'permission_id',
        bindLabel: 'permission',
        listName: 'permission-id',
        listData: []
    },
    {
        name: "description",
        label: "Description",
        placeholder: "Description",
        type: "text",
        value: "",
        disable: false
    }
];