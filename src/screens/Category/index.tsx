import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView
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
                        }) : null
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
    }
});

export default CategoryScreen;
