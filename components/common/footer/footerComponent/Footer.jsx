import Icon from "../FooterIcon/FooterIcon";
import {Home, Search, BookWhite, Notification, Chat} from "../../../../constants/icons";
import { View } from "react-native";
import styles from "./Footer.style";

const Footer=()=>{
    return(
        <View style={styles.footer}>
            <Icon source={Home}/>
            <Icon source={Search}/>
            <Icon source={BookWhite}/>         
            <Icon source={Notification}/>
            <Icon source={Chat}/>
        </View>
    )
}

export default Footer;