import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import StackList from './StackList';
import StackMap from './StackMap';
import Home from './../Screens/Home';
import Add from './../Screens/AddNote';
import Detail from './../Screens/Detail';
import Update from './../Screens/Update';
const Drawer = createDrawerNavigator();

export default function DrawerRoute({navigation}) {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="List" component={StackList} />
			<Drawer.Screen name="Map" component={StackMap} />
			<Drawer.Screen name="Login" component={Home}/>
			<Drawer.Screen name="Insert" component={Add} />
			<Drawer.Screen name="Detail" component={Detail} />
		</Drawer.Navigator>
	);
}
