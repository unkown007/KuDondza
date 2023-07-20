import React from 'react'
import { View, Text } from 'react-native'
import styles from './Loader.style'
import { useWindowDimensions, ActivityIndicator } from 'react-native'
import { COLORS } from '../../../constants'

const Loader = ({visible = false}) => {
    const {height, width} = useWindowDimensions()

    return (
        visible && (
            <View style={[styles.container, {height, width}]}>
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color={COLORS.blue}/>
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>Loading</Text>
                </View>
            </View>
        )
    )
}

export default Loader