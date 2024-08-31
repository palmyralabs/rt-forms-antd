
import { InputType } from "zlib";
import { FieldOptions, IServerLookupOptions } from "@palmyralabs/rt-forms";


interface IFieldProps {
    size?: 'small' | 'medium' | 'large'
}

interface ITextFieldProps {
    variant?: 'standard' | 'outlined' | 'filled'
    fullWidth?: boolean,
    placeholder?: string
}

interface ILayoutOptions {
    customContainerClass?: string,
    customLabelClass?: string,
    customFieldClass?: string,
    colspan?: number,
    className?: string,
    fieldProps?: IFieldProps
}

interface TextViewAttributeDefinition {
    attribute: string,
    textAlign?: 'left' | 'right' | 'center',
    variant?: 'standard' | 'outlined'
}

interface AntdInputFieldOptions extends FieldOptions {
    label?: string,
    title?: string,
    attribute: string
}

type IRadioGroupOptions = Record<any, any> | Record<string, any> | { value: any, label: string }[];

type FlexDirection = 'column' | 'row'

interface ValueLabel {
    value: number,
    label: string
}

interface ITextFieldDefinition extends AntdInputFieldOptions, ILayoutOptions {

}

interface IDatePickerDefinition extends AntdInputFieldOptions, ILayoutOptions, ITextFieldProps {
    serverPattern?: string,
    displayPattern?: string,
  
}

interface IDateTimePickerDefinition extends IDatePickerDefinition, AntdInputFieldOptions, ILayoutOptions, ITextFieldProps {

}

interface IServerLookupDefinition extends AntdInputFieldOptions, ILayoutOptions, IServerLookupOptions, ITextFieldProps {
    displayAttribute?: string,
    defaultValue?: InputType | any,
    multiple?: boolean,
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement> & { key: any },
        option: any,
        // state: AutocompleteRenderOptionState,
        ownerState: any,
    ) => React.ReactNode
}

interface ISelectDefinition extends AntdInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>
}

interface ISwitchDefinition extends AntdInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>
}

interface IRadioGroupDefinition extends AntdInputFieldOptions, ILayoutOptions {
    options: IRadioGroupOptions
    flexDirection?: FlexDirection
}

interface ICheckBoxDefinition extends AntdInputFieldOptions, ILayoutOptions {
    icon?: any,
    checkedIcon?: any
}

interface ICheckBoxGroupDefinition extends AntdInputFieldOptions, ILayoutOptions {
    options: Record<any, any> | Record<string, any>
    flexDirection?: FlexDirection
}

interface ISliderDefinition extends AntdInputFieldOptions, ILayoutOptions {
    minDistance?: number,
    range?: never
}

interface IRatingDefinition extends AntdInputFieldOptions, ILayoutOptions {
    variant?: 'standard' | 'outlined' | 'filled'
}

interface IServerCheckboxDefinition extends AntdInputFieldOptions, ILayoutOptions, IServerLookupOptions {
    hideSelectAll?: boolean,
    showSelectedOnly?: boolean,
    flexDirection?: FlexDirection
}

interface IEventListeners {
    onBlur: (data: any) => void,
    onFocus: (data: any) => void,
    onValueChange: (data: any) => void,
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void
}

export type {
    ITextFieldDefinition, ISelectDefinition, IDatePickerDefinition, IServerLookupDefinition,
    ISwitchDefinition, IRadioGroupDefinition, ICheckBoxDefinition, ICheckBoxGroupDefinition,
    ISliderDefinition, IServerCheckboxDefinition, IRatingDefinition, IDateTimePickerDefinition
}

export type { AntdInputFieldOptions, IEventListeners, ValueLabel, TextViewAttributeDefinition }