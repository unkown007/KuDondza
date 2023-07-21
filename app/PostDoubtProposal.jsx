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
import DropDown from "../components/common/dropdown/DropDown";
import TextArea from "../components/textArea/TextArea";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function PostDoubtProposal(){
    const router = useRouter();
    const [prop, setProp] = useState(100);
    const [skill, setSkills] = useState("");
    const [doubt, setDoubt] = useState('');

    const handleOnChange=(text)=>{
        setSkills(text);
    }

    const clickMinus=()=>{
        setProp(prop-10)
    }

    const clickPlus=()=>{
        setProp(prop+10)
    }

    const skills = [
        {key:'1', value:"Base de dados relacionais"},
        {key:'2', value:"POO"},
        {key:'3', value:"SQL"},
    ]
    useEffect(() => {
        const loadData = async () => {
          try {
            const storedDoubt = await AsyncStorage.getItem('duvida');
            if (storedDoubt) {
              setDoubt(storedDoubt);
            }
          } catch (error) {
            console.log('Erro ao carregar dados do AsyncStorage:', error);
          }
        };
    
        loadData();
      }, []); 
    
   
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white, },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={back} dimension="60%" handlePress={()=>router.back()}/>
                    ),
                    headerTitle: ()=>(
                        <View style={{
                                width:300, height:70,
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

                <View style={{backgroundColor:"gray,", alignItems:"flex-start", alignContent:"flex-start", flexDirection:"column",
                    marginTop:20, height:250, marginBottom:50}}>
                    <TextArea
                        // placeholder="Qual é a ajuda que precisa?"
                        // handleChange={handleOnChange}
                        // error={errors.doubt}
                        // blur={validate}
                        v={doubt}
                        editable={false}
                    />
                </View>


                <Proposal proposal={prop} imgUrlP={plus} imgUrlM={minus} onclickMinus={clickMinus} onclickPlus={clickPlus}/>

                <View style={{marginTop:50}}>
                    <DropDown
                        label={"Habilidades"}
                        data={skills}
                        onSelectItem ={handleOnChange}
                    />
                </View>
                
            </ScrollView>

        </SafeAreaView>
    )
}

export default PostDoubtProposal;