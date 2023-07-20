import { Text } from "react-native";
import { COLORS } from "../constants";

const Logo=({color})=>{
    return(
        <Text style={{
            fontSize:40,
            color: color,
        }}>
            KuDondza
        </Text>
    )
}

export default Logo;