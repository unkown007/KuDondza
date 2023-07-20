import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { COLORS } from '../../../constants'

const Button = ({title, onPress = () => {}, w,h, fontSize, ...props}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: h,
                width: w,
                backgroundColor: COLORS.blue,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                marginVertical: 20,
            }}
            {...props}>
            <Text
                style={{
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: fontSize,
                }}
                >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button