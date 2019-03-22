import React, {Component} from "react";
import {
    View,
    Text,
    Button
} from "react-native";
import {Container} from "../components/index";
import Icon from "react-native-vector-icons/Ionicons";

export default class Message extends Component{
    static navigationOptions = () => {
        return{
            tabBarLabel: "消息",
            tabBarIcon: ({tintColor}) => (<Icon name = "ios-mail" size = {30} color = {tintColor}/>)
        }
    }
    render(){
        return(
            <Container>
                <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text>Message</Text>
                    <Button title = "下一页" onPress = {_ => this.props.navigation.navigate("NextPage")}/>
                </View>
            </Container>
        )
    }
}