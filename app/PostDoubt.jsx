import { SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import { Stack, useRouter } from "expo-router";
import HeaderBtn from "../components/common/header/headerbtn/HeaderbBtn";
import { back, Close, user, doc, photo} from "../constants/icons";
import { COLORS } from "../constants";
import Button from "../components/common/button/Button";
import Icon from "../components/common/footer/FooterIcon/FooterIcon";
import { ScrollView } from "react-native-gesture-handler";
import TextArea from "../components/textArea/TextArea";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function PostDoubt(){
    const router = useRouter();
    const [errors, setError] = useState({});

    const inicialValus={
        doubt:"",
    }
    const [duvida, setDoubt] = useState('');

    handleOnChange=(text)=>{
        setDoubt(text)
    }

    const validate=()=>{      
        if(!doubt.doubt){
            setError({doubt:"Este Campo nao pode estar em branco, insira a sua duvida."})
           // errors.doubt = 
        }
    }

    const onSubmit=()=>{
        try {
            AsyncStorage.setItem('duvida', duvida);
            router.push("/PostDoubtProposal");
          } catch (error) {
            console.log('Erro ao salvar no AsyncStorage:', error);
          }
        
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
                                    onPress={onSubmit}
                                  />
                        </View>
                      
                    ),
                    
                }}
            />
     
            <ScrollView showsVerticalScrollIndicator={false}
                
                contentContainerStyle={{
                    paddingHorizontal:30,
                    borderTopWidth:1,
                    borderTopColor:COLORS.grey,
                    backgroundColor:COLORS.white
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
                        handleChange={handleOnChange}
                        // error={errors.doubt}
                        // blur={validate}
                        v={duvida}
                        editable={true}
                    />
                </View>

                <View  style={{flexDirection:"row", alignItems: "center", marginTop:120,paddingBottom:110}}>
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