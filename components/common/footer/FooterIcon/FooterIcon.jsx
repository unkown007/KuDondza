import { Image, TouchableOpacity } from "react-native";
import styles from "./FooterIcon.style";

const Icon=({source, handleclick, dimension})=>{
    return(
        <TouchableOpacity onPress={handleclick}>
            <Image source={source} style={styles.icon(dimension)}/>
        </TouchableOpacity>
    )
}

export default Icon;