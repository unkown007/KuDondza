import { View } from "react-native"
import ProfilePic from "./common/profilepic/ProfilePic"
import HeaderBtn from "./common/header/headerbtn/HeaderbBtn"
import { Text } from "react-native"
import { COLORS, SIZES } from "../constants"
import { Options } from "../constants/icons"
import { BookWhite } from "../constants/icons"
import Icon from "./common/footer/FooterIcon/FooterIcon"
import { useRouter } from "expo-router"

function DoubtCard({navigation, imgUrl, name, doubt, icon, icon2, icon3, proposal}){
    const router = useRouter()
    return(
        <View style={{
            borderTopWidth:1,
            borderBottomWidth:1,
            borderTopColor:COLORS.grey,
            borderBottomColor:COLORS.grey,
            paddingVertical:10,
            marginBottom:10,
            paddingHorizontal:25
        }}
        >
           <View style= {{flexDirection: 'row', justifyContent: 'space-between', alignItems:"center"}}>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{top: 3, marginRight:10}}>
                        <ProfilePic image = {imgUrl} width ={50} height ={50} />
                    </View>
                    <View style = {{}}>
                        <Text style ={{fontSize: SIZES.small, fontWeight:'bold'}}>{name}</Text>
                        <Text style ={{fontSize: SIZES.xSmall}}> 12 min</Text>
                    </View>
                </View>
                <View style ={{bottom: 7}} >
                    <HeaderBtn 
                        style ={{top: 8 }} 
                        iconUrl = {Options} 
                        dimension ="60%"/>
                </View>
            </View> 
            <Text style={{marginTop:5, textAlign:"justify"}}
                onPress={() => router.push("proposal")}
            >{doubt}</Text>
            <Text style={{marginTop:20}}>Proposta: {proposal}</Text>
            <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                
                }}>
                <HeaderBtn 
                    style ={{top: 8 }} 
                    iconUrl = {icon} 
                    dimension ="60%"
                /> 
                <View style={{
                    gap:10,
                    flexDirection:"row",
                    justifyContent:"space-between",
                }}>
                    <HeaderBtn 
                        style ={{top: 8 }} 
                        iconUrl = {icon2} 
                        dimension ="60%"
                    />
                    <HeaderBtn 
                        style ={{top: 8 }} 
                        iconUrl = {icon3} 
                        dimension ="60%"
                    />       
                </View>
            </View>
        </View>
    )
}

export default DoubtCard