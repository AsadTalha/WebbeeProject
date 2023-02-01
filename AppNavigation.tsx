import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { useAppSelector, useAppDispatch } from "./src/store/hooks";


import Dashboard from './src/screens/Dashboard';
import CategoryElements from './src/screens/CategoryElements';
import Category from './src/screens/Category';

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    const category = useAppSelector(state => state.category);
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Dashboard">
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                {
                    category?.length ?
                        category.map((ele: any) => {
                            return (
                                <Drawer.Screen
                                    key={ele.name || ele.categoryId}
                                    name={ele.name || ele.categoryId}
                                    initialParams={{ categoryId: ele.categoryId, name: ele.name }}
                                    component={CategoryElements}
                                />
                            )
                        }) : null
                }
                <Drawer.Screen name="Category Management" component={Category} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}