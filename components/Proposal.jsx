import { useState } from "react";
import { minus, plus } from "../constants/icons";
import Icon from "./common/footer/FooterIcon/FooterIcon";
import { View, Text, StyleSheet } from "react-native";

function Proposal({proposal, onclickPlus, onclickMinus, imgUrlP,imgUrlM}){

    return(
        <View style={styles.prop}>
            <Text style={{fontSize:18, marginRight:25}}>Proposta:</Text>
            <Text style={{fontSize:18, marginRight:25}} >{proposal}</Text>
            <Icon source={imgUrlM} dimension={25} handleclick={onclickMinus}/>
            <Icon source={imgUrlP} dimension={25} handleclick={onclickPlus}/>
        </View>
    )
}

const styles=StyleSheet.create({
    prop:{
       flexDirection:"row",
       alignItems:"center", 
    }
})
export default Proposal;