import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants/theme";

const styles = StyleSheet.create({
    btnContainer: (widthdim, heightdim) => ({
        backgroundColor: COLORS.blue,
        width: widthdim,
        height: heightdim,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 30
    }),
}
)

export default styles