import { useState } from "react";
import { minus, plus } from "../constants/icons";
import Icon from "./common/footer/FooterIcon/FooterIcon";
import { View, Text } from "react-native";

function Proposal({proposal, onclickBtn, imgUrl}){

    return(
        <View>
            <Text>Proposta</Text>
            <Text>{proposal}</Text>
            <Icon source={imgUrl} dimension={30} handleclick={onclickBtn}/>
            {/* <Icon source={plus} dimension={30} handleclick={onclickBtn}/> */}
        </View>
    )
}

export default Proposal;