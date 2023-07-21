import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    footer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around', 
        position: 'absolute', 
        left: 0,
        right: 0,
        bottom: 0,
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: COLORS.grey     
    }

})
export default styles;