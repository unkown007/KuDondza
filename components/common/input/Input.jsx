import { TextInput } from "react-native";
import inputStyles from "./Input.Style";
import { Value } from "react-native-reanimated";

const Input =({w,h, placeholder, kBoardType})=>{
    return(
        <TextInput
            style={inputStyles.inputText(w,h)}
            placeholder={placeholder}
            // onChange={onchange}
            // value={value}
            keyboardType={kBoardType}
            // maxLength={}
        
        />
    )
}

export default Input;