import React, {Component} from "react";
import {
    View,
    Text,
    Button
} from "react-native";
import {Container} from "../components/index";
import Icon from "react-native-vector-icons/Ionicons";

export default class NextPage extends Component{
    static navigationOptions = () => {
        return{
            headerTitle: "详情",
        }
    }
    render(){
        return(
            <Container>
                <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text>NextPage</Text>
                </View>
            </Container>
        )
    }
}