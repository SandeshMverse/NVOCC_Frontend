import { IFormStructure } from "@shared/models/form-model";
import { RowData } from "@shared/models/table-model";

export const CountryDetailsData: RowData = {
    "headers": [{ label: "Sr.No", key: "SR.NO", type: 'autoIncrementNumber', size: '4%' },
    { label: "Country Name", key: "country_name", type: '' },
    { label: "Country Code", key: "country_code", type: '' },
    { label: "Action", key: "action", type: 'action', size: '8%', buttonNames: ['edit', 'view', 'delete'] }],
    "data": [],
    "dataKey": 'country_id',
    "buttonname": 'Create Country',
    "button": true,
    "statuses": [],
    "filterfields": ['country_name','country_code'],
    "isSearch": false
}

export const CountryTypeSearchGroup: IFormStructure[] = [
    {
        name: "country_id",
        placeholder: "Country Id",
        label: "Country  Id",
        type: "text",
        value: "",
        hiddenControl: true,
        disable: false,
    },
    {
        name: "country_name",
        label: "Country Name",
        placeholder: "Enter name",
        type: "text",
        value: "",
        required: true,
        isUpperCase: true,
        disable: false,
    },
    {
        name: "country_code",
        label: "Country Code",
        placeholder: "Enter country code",
        type: "text",
        value: "",
        required: true,
        disable: false,
    }
]