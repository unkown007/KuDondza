import React from "react";
import { Stack } from "expo-router";
import {SafeAreaView, View, Text, ScrollView, Alert} from "react-native";
import {COLORS, SIZES} from '../constants/theme'
import BlueBtn from '../components/common/bluebtn/BlueBtn';
import ProfilePic from "../components/common/profilepic/ProfilePic";
import HeaderBtn from '../components/common/header/headerbtn/HeaderbBtn'
import image from '../assets/icons/R.png'
import { Back, Options } from "../constants/icons";
import Footer from '../components/common/footer/footerComponent/Footer'



const Proposal = ({comments}) => {
    return(
        <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerBackVisible: true,
                    headerLeft: () => (
                            <HeaderBtn iconUrl = {Back} dimension ="60%" handlePress={null}/>
                    ),
                    headerTitle: "Proposta",
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.blue
                }}
            />
            <Footer/>



            <View>
                <View 
                    style = {{
                        flexDirection: 'row', 
                        padding :30, 
                        paddingTop: 20,
                        borderTopWidth: 1,
                        borderTopColor: COLORS.grey,
                        justifyContent: 'space-between' }}>
                    <View style = {{flexDirection: 'row' }}>

                        <View >
                            <ProfilePic image = {image} width ={50} height ={50} />
                        </View>
                        <View style = {{padding :5, }}>
                            <Text style ={{fontSize: SIZES.small, fontWeight:'bold'}}> Nome_apelido</Text>
                            <Text style ={{fontSize: SIZES.xSmall, paddingTop: 5}}> 12 min</Text>
                        </View>
                    </View>
                    <View>
                        <HeaderBtn 
                                style ={{paddingTop: 10, alignItems: "center", justifyContent: "space-between"}} 
                                iconUrl = {Options} 
                                dimension ="60%"/>
                    </View>
                
                </View>
                
                <View style={{padding: 30, paddingTop: 1}}>
                    <Text style = {{fontSize: SIZES.medium, paddingBottom:30}}>hdbffskfffffffffffffffffffffffffffffffffffffffffffffdj
                    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                    rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                    rrrrrrrrrrrrrrrrrrrrrrjjjjjjjjjjjjjjjjjjjjjj</Text>
                    <Text style ={{fontSize: SIZES.medium, fontWeight:'bold'}}>Proposta: 500.00</Text>
                </View>
        
            </View>
        
        
            
            <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                    paddingTop: 5,
                    paddingHorizontal: 10
                    }}>
                <View style = {{borderTopWidth: 1, borderTopColor: COLORS.grey, padding: 30, paddingTop:10}}>
                    <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{top: 3}}>
                                <ProfilePic image = {image} width ={20} height ={20} />
                            </View>
                            <View style = {{padding :5 }}>
                                <Text style ={{fontSize: SIZES.small, fontWeight:'bold'}}> Nome_apelido</Text>
                            </View>
                            <View style = {{top: 2}}>
                                <Text style ={{fontSize: SIZES.xSmall, paddingTop: 5}}> 12 min</Text>
                            </View>
                        </View>
                        <View style ={{bottom: 7}} >
                            <HeaderBtn 
                                style ={{top: 8 }} 
                                iconUrl = {Options} 
                                dimension ="60%"/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{paddingLeft: 25}}>
                            <Text> Proposta: 500.00 </Text>
                        </View>
                        <BlueBtn
                            width= {80}     
                            height = {20}
                            text = 'Aceitar'
                            onPress = {()=> 
                                Alert.alert(
                                    "Aceitar Proposta", 
                                    "Proposta: 200.00 \nTutor: Álvaro Simões", 
                                    [
                                    { text:'Aceitar', onPress: ()=> Alert.alert("Notificação", 
                                        "Aguarde pela confirmação de disponibilidade do tutor escolhido.")},
                                    { text: 'Cancelar', onPress: ()=> Alert.dismiss()},
                                  ])
                                }/>
                    </View>
                    <View style={{padding:10, paddingLeft: 25}}>
                        <Text>jhhhhdsahjdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Proposal