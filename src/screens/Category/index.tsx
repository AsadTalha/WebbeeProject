import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import Form from '../../components/CreateNewForm';
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

    console.log(category)
    return (
        <ScrollView style={styles.container}>
            <Header title={"Categories"} onClickHandler={addNewCategory} />
            {
                category.length ?
                    category.map((ele: Category, index: number) => {
                        return (
                            <View key={ele.categoryId} style={styles.formContainer}>
                                <Form
                                    data={ele}
                                    updateCategory={updateCategory}
                                    removeCategory={removeCategory}
                                    index={index}
                                />
                            </View>
                        )
                    }) : null
            }

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10
    },
    formContainer: {
        marginBottom: 16
    }
});

export default CategoryScreen;