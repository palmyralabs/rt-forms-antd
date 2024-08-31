import { FieldOptions } from "@palmyralabs/rt-forms";

import { ReactNode } from "react";

interface IDecoratedTitle {
    title: string,
    toolTip?: string
}

type widgetFn = () => ReactNode;

type ITitle = string | IDecoratedTitle | widgetFn;

interface IPattern {
    serverPattern?: string,
    displayPattern?: string,
}

interface IRange {
    min?: number,
    max?: number
}

type FieldType = "string" | "number" | "date" | "radio" | "select" | "iosswitch"
    | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "autoComplete"
    | "password" | "multiSelect" | "dateRange" | "float" | "numbersOnly" | "integer"
    | "slider" | "sliderRange" | "rating";

interface ColumnFieldOptions extends FieldOptions, IPattern, IRange {
    type: FieldType
}

interface Converter<TEXT, DATA> {
    /**
     * Format and Parse functions will be used in  form data entry
     */
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;
    // getRawdata: (data: DATA, props: ColumnFieldOptions) => TEXT;
    // getFieldData: (formData: any, props: ColumnFieldOptions) => any;
    // Convert function to be used in Table/Data Grid for display purpose
    convert: (text: TEXT) => TEXT;

    getDefaultValue: (d: any) => any;
    hasMultiUpdate?: () => boolean;
}




export type {
    ITitle, IPattern, Converter, ColumnFieldOptions, FieldType, IRange
}