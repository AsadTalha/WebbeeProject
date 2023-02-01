import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { useAppSelector, useAppDispatch } from "../../store/hooks"
import DashboardCategoryElements from "../../components/DasboardCategories";
import { addEmpty, remove, Category, update } from "../../store/features/category";

interface LoginProps {
    name?: String,
    navigation: DrawerNavigationProp<any, any>
}

const Dashboard = ({ name, navigation }: LoginProps) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector(state => state.category);

    return (
        <ScrollView style={styles.container}>
            {
                category.length ?
                    category.map((ele: Category) => {
                        return (
                            <DashboardCategoryElements name={ele.name} categoryId={ele.categoryId || ''} />
                        )
                    }) :
                    <Text>No categories available</Text>
            }
            <View style={styles.margin} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    margin: {
        height: 100
    }
});

export default Dashboard;
