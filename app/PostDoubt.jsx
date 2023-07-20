import { SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import { Stack, useRouter } from "expo-router";
import HeaderBtn from "../components/common/header/headerbtn/HeaderbBtn";
import { back, Close, user, doc, photo} from "../constants/icons";
import { COLORS } from "../constants";
import Button from "../components/common/button/Button";
import Icon from "../components/common/footer/FooterIcon/FooterIcon";
import { ScrollView } from "react-native-gesture-handler";
import TextArea from "../components/textArea/TextArea";
import { TextInput } from 'react-native-gesture-handler';
import InputField  from "../components/common/inputfield/InputField";

function PostDoubt(){

    const router = useRouter();

    const handlePressBack=()=>{
        
    }

    return(
        <SafeAreaView>
             <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white, },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={Close} dimension="60%" handlePress={()=>router.back()}/>
                    ),
                    headerTitle: ()=>(
                        <View style={{
                            width:300, height:70,
                            flexDirection:"row",
                            justifyContent:"flex-end",
                            paddingRight:25
                            }}>
                                  <Button title={"Seguinte"} w={100} h={25} fontSize={15}
                                    onPress={()=>router.push("/PostDoubtProposal")}
                                  />
                        </View>
                      
                    ),
                    
                }}
            />
     
            <ScrollView showsVerticalScrollIndicator={false}
                
                contentContainerStyle={{
                    paddingHorizontal:25,
                    borderTopWidth:1,
                    borderTopColor:COLORS.grey,
                }}
            >
                <View style={{flexDirection:"row", alignItems: "center", marginTop:20}}>
                    <Icon source={user} dimension={40}/>
                    <Text style={{fontSize: 15, marginLeft:5}}>luisa_costa</Text>
                </View>
                
                <View style={{backgroundColor:"gray,", alignItems:"flex-start", alignContent:"flex-start", flexDirection:"column",
                    marginTop:20, height:350}}>
                    <TextArea
                        placeholder="Qual é a ajuda que precisa?"
                    />
                </View>
                <View  style={{flexDirection:"row", alignItems: "center", marginTop:120,}}>
                    <TouchableOpacity>
                        <View style={{borderWidth:1, borepadding:5, justifyContent:"center", flexDirection:"row", alignItems:"center",
                         borderRadius:50, height:50, width:50, marginRight:10}}>
                            <Icon source={doc} dimension={35}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{borderWidth:1, borepadding:5, justifyContent:"center", flexDirection:"row", alignItems:"center",
                         borderRadius:50, height:50, width:50, marginRight:10}}>
                            <Icon source={photo} dimension={35}/> 
                        </View>
                    </TouchableOpacity>               
                </View>
                
            </ScrollView>           
        </SafeAreaView>
    )
}

export default PostDoubt;