import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { View, Text } from 'react-native'
import styles from './DropDown.style'

const DropDown = ({label, data}) => {
    const [selected, setSelected] = React.useState("")

    return (
        <View
            style={{
                marginBottom: 10
            }}
        >
            <Text style={styles.label}>{label}</Text>
            <SelectList style={styles.inputContainer}
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
            />
        </View>
    )
}

export default DropDown