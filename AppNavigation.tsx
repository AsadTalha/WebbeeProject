import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from './src/screens/Dashboard';
// import CreateCategory from './src/screens/CreateCategory';
import Category from './src/screens/Category';

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Dashboard">
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Category" component={Category} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}