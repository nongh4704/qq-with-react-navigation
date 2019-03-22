import React, {Component} from "react";
import {
    View,
    Text
} from "react-native";
import {Container} from "../components/index";
import Icon from "react-native-vector-icons/Ionicons";

export default class Vip extends Component{
    static navigationOptions = (object) => {
        return{
            headerTitle: "了解会员特权"
        }
    }
    render(){
        return(
            <Container>
                <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text>会员特权</Text>
                </View>
            </Container>
        )
    }
}