import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { useState } from "react";

const LoginCard=({role, text})=>{
    const [cardCliked, setCardCliked] = useState(false);

    const onClickCard=()=>{
        setCardCliked(!cardCliked);
    }


    return(
        <TouchableOpacity onPress={onClickCard}>
            {cardCliked ? 
                <View style={styles.card("black")}>
                    <Text style={{  textDecorationLine:"underline"}}>{role}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View> 
                :
                <View style={styles.card(COLORS.borderGray)}>
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
        //textDecorationLine:
        marginTop: 5,
    }

})

export default LoginCard;