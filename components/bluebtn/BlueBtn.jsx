import React from 'react'
import {SafeAreaView, Button} from 'react-native'
 
import styles from './BlueBtn.style'
const BlueBtn = ({text}) => {
    return(
        <Button style = {styles.btnContainer} >
            <title style={styles.btnText}>{text}</title>
        </Button>
    )
}

export default BlueBtn

