import React from "react";
import {
    SafeAreaView,
    StyleSheet
} from "react-native"; 

export default class Container extends React.Component{
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                {this.props.children}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})