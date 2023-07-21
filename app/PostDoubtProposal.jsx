import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter} from "expo-router";
import { COLORS } from "../constants";
import { back,user } from "../constants/icons";
import { HeaderBtn } from "../components";
import Button from "../components/common/button/Button";
import Icon from "../components/common/footer/FooterIcon/FooterIcon";
import Proposal from "../components/Proposal";
import { useState } from "react";
import { minus, plus } from "../constants/icons";

function PostDoubtProposal(){
    const router = useRouter();
    const [prop, setProp] = useState(100);

    const clickMinus=()=>{
        setProp(
            (proposal)=>{(prop+proposal)}
        )
    }

    return(
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white, },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={back} dimension="60%" handlePress={()=>router.back()}/>
                    ),
                    headerTitle: ()=>(
                        <View style={{
                                width:250, height:70,
                                flexDirection:"row",
                                justifyContent:"flex-end",
                                paddingRight:25
                                }}>
                                  <Button title={"Postar"} w={100} h={25} fontSize={15}
                                    // onPress={()=>router.push("/PostDoubtProposal")}
                                  />
                        </View>
                      
                    ),
                    
                }}
            />
            <ScrollView
                howsVerticalScrollIndicator={false}                  
                contentContainerStyle={{
                    paddingHorizontal:25,
                    borderTopWidth:1,
                    borderTopColor:COLORS.grey,
                    backgroundColor:COLORS.white,
                }}
            >
                <View style={{flexDirection:"row", alignItems: "center", marginTop:20}}>
                    <Icon source={user} dimension={40}/>
                    <Text style={{fontSize: 15, marginLeft:5}}>luisa_costa</Text>
                </View>

                <Proposal proposal={prop} imgUrl={plus} onclickBtn={clickMinus}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostDoubtProposal;