import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import StackList from './StackList';
import StackMap from './StackMap';
import About from './../Screens/About';

const Drawer = createDrawerNavigator();

export default function DrawerRoute({navigation}) {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="List" component={StackList} />
			<Drawer.Screen name="Map" component={StackMap} />
			<Drawer.Screen name="About" component={About} />
		</Drawer.Navigator>
	);
}