import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import CategoryForm from '../../components/CategoryForm';
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addEmpty, remove, Category, update } from "../../store/features/category";
import Header from "../../components/Header";

interface LoginProps {
    name?: String,
    navigation: DrawerNavigationProp<any, any>
}

const CategoryScreen = ({ name, navigation }: LoginProps) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector(state => state.category);

    const addNewCategory = () => {
        const data = {
            name: "Category Name",
            customeTitle: '',
            fields: []
        }
        dispatch(addEmpty(data))
    }
    const removeCategory = (categoryId: string) => {
        dispatch(remove(categoryId))
    }
    const updateCategory = (data: Category) => {
        dispatch(update(data))
    }

    return (
        <View style={styles.container}>
            <Header
                title={"Categories"}
                onClickHandler={addNewCategory}
                lable={"Add New Category"}
            />
            <ScrollView >
                {
                    category.length ?
                        category.map((ele: Category, index: number) => {
                            return (
                                <View key={ele.categoryId} style={styles.formContainer}>
                                    <CategoryForm
                                        data={ele}
                                        updateCategory={updateCategory}
                                        removeCategory={removeCategory}
                                        index={index}
                                    />
                                </View>
                            )
                        }) : <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>No categories available</Text>
                        </View>
                }
                <View style={styles.margin} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        minHeight: '100%',
        padding: 10
    },
    formContainer: {
        marginBottom: 16
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

export default CategoryScreen;
