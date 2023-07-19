import { StyleSheet } from "react-native";
import {COLORS} from "../../../constants/theme";

const inputStyles = StyleSheet.create({
    inputText: (w,h)=> ({
        width: w,
        height: h,
        borderColor: 'gray',
        borderWidth: 1,   
        borderColor: COLORS.borderGray,
        paddingLeft: 15,
        paddingRight:10,
        paddingTop:2,
        paddingBottom:3,
        borderRadius:30
    }),

    view:{
        marginTop:20
    }
})

export default inputStyles;

// style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}