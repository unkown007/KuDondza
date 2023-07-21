import { SafeAreaView, FlatList, View } from "react-native";
import { COLORS } from "../constants";
import { DATA } from "../constants/feedData";
import { ScrollView } from "react-native";
import DoubtCard from "../components/DoubtCard";
import { icon,icon2,icon3, PostDbt,back } from "../constants/icons";
import Icon from "../components/common/footer/FooterIcon/FooterIcon";
import { useRouter, Stack } from "expo-router";
import Footer from "../components/common/footer/footerComponent/Footer";
import { HeaderBtn } from "../components/common/header/headerbtn/HeaderbBtn"

function Feed({navigation}){
    const router = useRouter();

    return(
        <SafeAreaView style={{backgroundColor:COLORS.white,}}>
            {/* <Stack.Screen
                // name='Feed'
                // component={Register}
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn iconUrl={back} dimension="60%"/>
                    ),
                    headerTitle: "Feed",
                    headerTitleAlign: "center",
                    headerTintColor: COLORS.blue
                }}
            />  */}
            
            {/* <ScrollView> */}
                <View>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) =>
                            <DoubtCard
                                imgUrl={item.imgUrl}
                                name={item.name}
                                doubt={item.doubt}
                                proposal={item.proposal}
                                icon={icon}
                                icon2={icon2}
                                icon3={icon3}
                            />
                        }
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                   
                </View>                                 
            {/* </ScrollView> */}
            <View style={{
                zIndex:20,
                position:"absolute",
                right:30,
                bottom:70
                    }}>
                    <Icon source={PostDbt} dimension={60} handleclick={()=>navigation.navigate("PostDoubt")}/>
            </View>
            <View>
                <Footer/>
            </View>
        </SafeAreaView>
    )
}

export default Feed;