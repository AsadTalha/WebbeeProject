import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView, Text
} from 'react-native';
import { addEmpty, remove, TypeElement, update, TypeElementField } from "../../store/features/element";
import { Category, Field } from "../../store/features/category";

import { useAppSelector, useAppDispatch } from "../../store/hooks"
import Header from "../../components/Header";
import CategoryElementForm from "../../components/CategoryElementForm"

interface LoginProps {
    navigation: any,
    route: any
}

const CategoryElements = ({ navigation, route }: LoginProps) => {
    const { categoryId, name } = route.params;
    const dispatch = useAppDispatch();
    const category: Category[] = useAppSelector(state => state.category.filter((ele: any) => ele.categoryId === categoryId));
    const elements = useAppSelector(state => state.element.filter((ele: any) => ele.categoryId === categoryId))

    const addNewElement = () => {
        if (category[0]) {
            const fields: Field[] = category[0].fields;
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~', fields)
            const elementFields: TypeElementField[] =
                fields.map((ele: Field) => {
                    return { type: ele.type, value: '', lable: ele.lable }
                })
            const payload = {
                fields: elementFields,
                categoryId,
                elementId: ''
            }
            dispatch(addEmpty(payload))
        }
    }

    const removeCategory = (elementId: string) => {
        dispatch(remove(elementId))
    }
    const updateCategory = (data: TypeElement) => {
        dispatch(update(data))
        console.log(data)
    }

    console.log('==================elements', elements)
    return (
        <View style={styles.container}>
            <Header
                title={name || "Category name"}
                onClickHandler={addNewElement}
                lable={"Add New Element"}
            />
            <ScrollView >
                {
                    elements.length ?
                        elements.map((ele: TypeElement, index: number) => {
                            return (
                                <View key={ele.elementId}>
                                    <CategoryElementForm
                                        removeCategory={removeCategory}
                                        updateCategory={updateCategory}
                                        elementData={ele}
                                        index={index}
                                        category={category}
                                    />
                                </View>
                            )
                        }) : <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>No Elements available</Text>
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
        padding: 10,
        minHeight: '100%'
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
export default CategoryElements;
