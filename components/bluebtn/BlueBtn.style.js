import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    btnContainer: (widthdim, heightdim) => ({
        backgroundColor: COLORS.blue,
        width: widthdim,
        height: heightdim,
        alignContents: 'center', 
        borderradius: 30
    }),
    btnText: {
        fontsize: SIZES.xLarge,
        fontfamily:  FONT.regular,
        color:  COLORS.white
        
    }
}
)

export default styles