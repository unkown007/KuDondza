import { Image, TouchableOpacity } from "react-native";
import styles from "./FooterIcon.style";

const Icon=({source})=>{
    return(
        <TouchableOpacity>
            <Image source={source} style={styles.icon(30)}/>
        </TouchableOpacity>
    )
}

export default Icon;