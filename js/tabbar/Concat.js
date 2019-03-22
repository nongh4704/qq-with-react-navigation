import React, {Component} from "react";
import {
    View,
    Text
} from "react-native";
import {Container} from "../components/index";
import Icon from "react-native-vector-icons/Ionicons";

export default class Concat extends Component{
    static navigationOptions = (object) => {
        return{
            tabBarLabel: "联系人",
            tabBarIcon: ({tintColor}) => (<Icon name = "ios-contact" size = {30} color = {tintColor}/>)
        }
    }
    render(){
        return(
            <Container>
                <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text>Concat</Text>
                </View>
            </Container>
        )
    }
}