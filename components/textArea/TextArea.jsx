import { TextInput } from "react-native";

function TextArea({placeholder, ...props}){
    return(
        <TextInput
            placeholder={placeholder}
            multiline={true}
            
            style={{
                lineHeight:30,
                width:"100%",
                textAlign:"justify",
                // borderWidth:1,
                paddingHorizontal:5,
                flexDirection:"column",
                justifyContent:'flex-start'
            }}
        />
    )
}

export default TextArea;