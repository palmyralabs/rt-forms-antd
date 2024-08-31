import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { getFieldHandler, IFormFieldError, ITextField, useFieldManager, FieldDecorator } from '@palmyralabs/rt-forms';
import { getFieldLabel } from './util'
import { ITextFieldDefinition } from './types'
import { Input, InputProps, InputRef } from 'antd';
import './FormField.css'
import { Errorwrapper } from './ErrorWrapper';

const AntdTextField = forwardRef(function AntdTextField(props: ITextFieldDefinition & InputProps, ref: MutableRefObject<ITextField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef<InputRef>(null);
    const variant = props.variant || 'outlined';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (event: any) => {
        if (!props.readOnly) {
            setValue(event.target.value);
            if (props.onChange)
                props.onChange(event);
        }
    }

    const errorStatus = error.status == true ? 'error' : '';

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Errorwrapper error={error}>
                <Input
                    addonBefore={props.label}
                    variant={variant}
                    ref={inputRef}
                    {...options}
                    value={getValue()}
                    status={errorStatus}
                />
                
            </Errorwrapper>
        </FieldDecorator>}
    </>
    );
});

export { AntdTextField };