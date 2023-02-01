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
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>No data available</Text>
                    </View>
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
    },
    errorContainer: {
        display: 'flex',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    errorText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#DC4A9A'
    }
});

export default Dashboard;
