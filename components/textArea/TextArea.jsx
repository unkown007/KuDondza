import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { COLORS } from "../../constants";

function TextArea({placeholder,handleChange, error,blur,v, editable,...props}){
    //const [error, setError] = useState(false);
    return(
        <View>
            {/* {error && (
                <Text style={{color: COLORS.red, fontSize: 12, marginBottom: 5}}>
                {error}
            </Text>
            )} */}

            <TextInput

            placeholder={placeholder}
            multiline={true}
            onChangeText={handleChange}
            onBlur={blur}
            value={v}
            // editable={editable}

            style={{
                lineHeight:30,
                width:300,
                textAlign:"justify",
                // borderWidth:1,
                paddingHorizontal:5,
                flexDirection:"column",
                justifyContent:'flex-start'
            }}
        />
        </View>
        
    )
}

export default TextArea;