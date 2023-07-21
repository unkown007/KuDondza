import React from "react";
import { View, Text } from 'react-native'

import styles from './headertitle.style'

const HeaderTitle = ({text, color, fontsize}) => {
    return (
        <View style = {styles.txtContainer}>
            <Text style={{ color: color, fontSize: fontsize }}>{text}</Text>
        </View>
    )
}

export default HeaderTitle