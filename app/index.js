import { View, Text } from "react-native";
import Footer from "../components/common/footer/footerComponent/Footer";
import Input from "../components/common/input/Input";
import { useState } from "react";
import inputStyles from "../components/common/input/Input.Style";

const Home = () => {
    const [name, setName] = useState("");

    const onchange=(e)=>{
        setName("amaridla");
    }

    return (
        <View>
           
                <Footer/>
         
           
            {/* <View style={inputStyles.view}>
                <Input
                    w={300}
                    h={30}
                    kBoardType="numeric"
                    // placeholder="Introduza"
                    // onchange={onchange}
                    // value={name}
                    // keyBoardType="text"
                />

            </View> */}
            
        </View>
    )
}

export default Home;