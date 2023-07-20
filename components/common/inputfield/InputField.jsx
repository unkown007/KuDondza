import React from 'react'
import { View, Text } from 'react-native'
import styles from './InputField.style'
import { TextInput } from 'react-native-gesture-handler'
import { COLORS, Icons } from '../../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const InputField = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hidePassword, setHidePassword] = React.useState(password)

    return (
        <View style={{
            marginBottom: 10
        }}>
            <Text style={styles.label}>{label}</Text>
            <View style={[
                styles.inputContainer,
                {
                    borderColor: error
                        ? COLORS.red
                        : isFocused
                        ? COLORS.darkBlue
                        : COLORS.border,
                    }
                ]}>
                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                    }}
                    style={{flex: 1}}
                    {...props}
                />
                {password && (
                    <Icon
                        onPress={() => setHidePassword(!hidePassword)}
                        style={{fontSize: 22, color: COLORS.darkBlue}}
                        name= {hidePassword ? "eye-outline" : "eye-off-outline"}
                    />
                )}
            </View>
            {error && (
                <Text style={{color: COLORS.red, fontSize: 12, marginTop: 5}}>
                    {error}
                </Text>
            )}
        </View>
    )
}

export default InputField