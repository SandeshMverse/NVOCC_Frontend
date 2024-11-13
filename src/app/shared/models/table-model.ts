export interface Header {
    label: string;
    key: string;
    type?: string;
    url?: string
    size?: string;
    truncateString?: boolean;
    buttonNames?: any;
    firstkey?: string;
    secondKey?: string;
    bindTagName?:any;
}

export interface RowData {
    headers: Header[];
    data: any;
    statuses: any;
    dataKey: string;
    buttonname?: string;
    button?: boolean;
    filterfields?: any;
    isSearch?: boolean;
    exportExcel?: boolean;
    excelKeys?: any;
    isSearchIndividual?:boolean;
    operationId?:string;
    isCheckBox?: boolean;
    checkboxbuttonname?: string;
    checkboxbutton?: boolean;
}