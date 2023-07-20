import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, Pressable, Platform } from 'react-native'
import { TextInput } from 'react-native';
import styles from '../inputfield/InputField.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../../constants';

const DateTime = ({label}) => {
    const [date, setDate] = React.useState(new Date())
    const [showPicker, setShowPicker] = React.useState(false)
    const [dateOfBirth, setDateOfBirth] = React.useState("")

    const toggleDatepicker = () => {
        setShowPicker(!showPicker)
    }

    const onChange = ({ type }, selectedDate) => {
        if (type == 'set') {
            const currentDate = selectedDate
            setDate(currentDate)

            if (Platform.OS === "android") {
                toggleDatepicker()
                setDateOfBirth(currentDate.toDateString())
            }
        } else {
            toggleDatepicker()
        }
    }

    return (
        <View>
            <Text>{label}</Text>
            {showPicker && (
                <DateTimePicker
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChange}
                />
            )}
            {!showPicker && (
                <Pressable
                    onPress={toggleDatepicker}
                >
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{flex:1}}
                            placeholder="Friday July 21 2004"
                            value={dateOfBirth}
                            onChangeText={setDateOfBirth}
                            editable={false}
                        />
                        <Icon
                            style={{fontSize: 22, color: COLORS.darkBlue}}
                            name="calendar-month"
                        />
                    </View>
                </Pressable>
            )}
        </View>
    )
}

export default DateTime