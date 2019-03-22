/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
	Platform, 
	StyleSheet, 
	Text, 
	View, 
	Image,
	FlatList,
	TouchableOpacity 
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import { DRAWER_LIST } from './js/common/constant';

import Message from "./js/tabbar/Message";
import Concat from "./js/tabbar/Concat";

import NextPage from "./js/tabbar/NextPage";


import Vip from "./js/drawer/vip";


const TabNavigator = createBottomTabNavigator({
	Message: Message,
	Concat: Concat
})
const TabbarConatiner = createAppContainer(TabNavigator);


const StackNavigator = createStackNavigator({
	Tabbar: {
		screen: TabbarConatiner
	},
	Vip: {
		screen: Vip
	},
	NextPage
},{
	defaultNavigationOptions: ({navigation}) => {
		if(navigation.state.routeName === "Tabbar"){
			let index = navigation.state.index;
			const titleArray = ["消息", "联系人"];
			return {
				headerTitle: titleArray[index],
				headerLeft: (<HeaderLeft onPress = {_ => navigation.openDrawer()}/>)
			}
		}else{
			return null;
		}
	}
})
const StackContainer = createAppContainer(StackNavigator);


const DrawerNavigator = createDrawerNavigator({
	StackContainer: {
		screen: StackContainer
	}
},{
	contentComponent: (navigation) => <DrawerView {...navigation}/>,
	defaultNavigationOptions: ({navigation}) => {
		let lockMode = "unlocked";
		if(navigation.state.routeName == "StackContainer" && navigation.state.index != 0){
			lockMode = "locked-closed";
		}
		return {
			drawerLockMode: lockMode
		}
	}
})
const AppContainers = createAppContainer(DrawerNavigator);


class HeaderLeft extends React.Component{
	render(){
		return (
			<TouchableOpacity style = {styles.avatarbox} onPress = {this.props.onPress}>
				<Image source = {{uri: "http://img.hb.aicdn.com/b0623e7530451f5bd8a44a547e8794949fb8586329a5c-JOHiv5_fw658"}} style = {styles.avatar}/>
			</TouchableOpacity>
		)
	}
}

class DrawerView extends React.Component{
	constructor(props){
		super(props);
	}

	onItemPress = () => {
		this.props.navigation.navigate("Vip");
	}

	renderItem = ({item, index}) => {
		return(
			<TouchableOpacity onPress = {this.onItemPress} style = {styles.draweritem}><Text>{item.title}</Text></TouchableOpacity>
		)
	}

	render(){
		return(
			<SafeAreaView style = {{flex:1}} forceInset = {{top: 0}}>
				<Image source = {{uri: "http://img.hb.aicdn.com/f327834fd62aa865e6dd197715c8a90d8004ce93e4fad-I3fGls_fw658"}} style = {styles.drawerimage}/>
				<FlatList 
					style = {styles.scroll}
					data = {DRAWER_LIST}
					keyExtractor = {item => item.id+""}
					renderItem = {this.renderItem}/>
			</SafeAreaView>
		)
	}
}


export default class App extends React.Component {
	render() {
		return (
			<AppContainers />
		)
	}
}

const styles = StyleSheet.create({
	avatarbox: {
		paddingHorizontal: 15,
	},
	avatar: {
		width:34,
		height: 34,
		resizeMode: "cover",
		borderRadius: 17
	},
	drawerimage: {
		height: 200,
		resizeMode: "cover"
	},
	scroll: {
		flex: 1
	},
	draweritem: {
		height: 40,
		justifyContent: "center",
		paddingHorizontal: 15
	}
})