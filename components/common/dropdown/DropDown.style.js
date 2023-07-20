import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
    },
    inputContainer: {
        height: 55,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 25,
        borderColor: COLORS.border,
        alignItems: 'center',
        padding: 10
    },
});

export default styles;