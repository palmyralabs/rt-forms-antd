import { IFormFieldError } from "@palmyralabs/rt-forms"

interface IErrorInput {
    error?: IFormFieldError
    children: any
    hasFocus?: boolean
}

const Errorwrapper = (props: IErrorInput) => {
    const message = props.error?.message;
    // const open = message != undefined && message != '';
    const status = props.error?.status;

    return (<>
        {/* <Tooltip placement={"right"} title={message} trigger={['focus', 'hover']}
            destroyTooltipOnHide={true}
        >
            {props.children}
        </Tooltip> */}
        {/* <Alert message="Success Text" type="success" /> */}
        {/* {props.children} */}

        <div className='ant-error-msg'>
            {props.children}
            {status && <>{message}</>}
        </div>

    </>)
}

export { Errorwrapper }