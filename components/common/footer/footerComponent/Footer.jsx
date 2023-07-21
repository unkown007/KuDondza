import Icon from "../FooterIcon/FooterIcon";
import {Home, Search, BookWhite, Notification, Chat} from "../../../../constants/icons";
import { View } from "react-native";
import styles from "./Footer.style";

const Footer=()=>{
    return(
        <View style={styles.footer}>
            <Icon source={Home} dimension={30}/>
            <Icon source={Search} dimension={30}/>
            <Icon source={BookWhite} dimension={30}/>         
            <Icon source={Notification} dimension={30}/>
            <Icon source={Chat} dimension={30}/>
        </View>
    )
}

export default Footer;