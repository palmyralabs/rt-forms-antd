import { AntdTextField } from "../src/palmyra";
import FormX from "./components/wire/FormX";


const App = () => {
    return <>
        <FormX>
            <AntdTextField attribute="asd" validRule={"email"} invalidMessage="Invalid email" label="labellll" />
            <AntdTextField attribute="dsds" label="lab" length={{ eq: 5, errorMessage: "Length is 5" }} />
            <AntdTextField attribute="ssds" regExp={{ regex: "^[a-zA-Z]+$", errorMessage: "Alphabets only"}} invalidMessage="Alphabets only" />
            <AntdTextField attribute="ssds" invalidMessage="This field is mandatory" title="asd" required/>
        </FormX>
    </>
}

export default App;