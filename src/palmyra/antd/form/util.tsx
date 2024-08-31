import { AntdInputFieldOptions } from "./types";


const getFieldLabel = (props: AntdInputFieldOptions) => {
    if (props.required && props.title)
        return (
            <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {props.title}
                    <span style={{ color: 'red' }}>*</span>
                </div>
            </>
        );
    else
        return props.title;
}

export { getFieldLabel }