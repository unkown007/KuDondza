import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { useState } from "react";

const LoginCard=({role, text, state, onPressCard, navagateTo})=>{
   // const [cardCliked, setCardCliked] = useState(state);

    // const onClickCard=()=>{
    //     onPressCard()
    //     navagateTo()
    // }

    return(
        <TouchableOpacity onPress={onPressCard}>
            {state ? 
                <View style={styles.card("black")}>
                    <Text style={{ textDecorationLine:"underline"}}>{role}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View> 
                :
                <View style={styles.card(COLORS.bordergray)}>
                    <Text style={{  textDecorationLine: "none"}}>{role}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>}
            
        </TouchableOpacity>      
        
    )
}

const styles = StyleSheet.create({
    card:(bColor) => ({
        marginBottom:50,
        width:270,
        textAlign:"justify",
        borderWidth:1,
        padding:15,
        borderColor:bColor,
    
    }),

    text:{
        marginTop: 5,
    }

})

export default LoginCard;