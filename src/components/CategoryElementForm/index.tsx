import { useState } from "react";
import { StyleSheet } from 'react-native';
import { View, Button, Text } from "react-native-ui-lib"
import InputWithLable from "../Input/InputWithLable";
import CustomePicker from "../Input/picker";

import { TypeElement, TypeElementField } from "../../store/features/element";
import CustomeCheckbox from "../Input/Checkbox";
import CustomeDateTimePicker from "../Input/DatePicker";
import { FullWindowOverlay } from "react-native-screens";

type FormType = {
    removeCategory: (categoryId: string) => void,
    updateCategory: (categoryId: TypeElement) => void,
    elementData: TypeElement,
    index: number,
    category: any
}
const CategoryElementForm = ({ removeCategory, updateCategory, elementData, index, category }: FormType) => {
    const addDataToField: (index: number, value: any) => void =
        (index: number, value: string) => {
            const newData = JSON.parse(JSON.stringify(elementData));
            const existingFiled = newData.fields;
            if (existingFiled[index]) {
                existingFiled[index].value = value;
                updateCategory(newData);
            } else {
                console.log('Array index out of bound', index)
            }
        }
    const title = category[0].customeTitle;
    const titleValue = elementData.fields.filter((ele: TypeElementField) => ele.lable === title)
    return (
        <View style={styles.container}>
            {
                title && titleValue && titleValue[0] && titleValue[0].value ?
                    <Text style={styles.categoryTitle}>{title} : {titleValue[0].value}</Text> :
                    <Text style={styles.categoryTitle}>Title</Text>
            }


            {
                elementData.fields.map((ele: TypeElementField, i: number) => {
                    if (ele.type === "TEXT" && typeof ele.value === 'string') {
                        return (
                            <View key={ele.value + i.toString} style={styles.element}>
                                <InputWithLable
                                    lable={ele.value}
                                    placeHolder={ele.lable}
                                    handleChange={addDataToField}
                                    index={i}
                                />
                            </View>
                        )
                    } else if (ele.type === "DATE") {
                        return (
                            <View key={i} style={styles.element}>
                                <CustomeDateTimePicker
                                    value={ele.value}
                                    handleChange={addDataToField}
                                    index={i}
                                />
                            </View>
                        )
                    } else if (ele.type === "CHECBOX") {
                        return (
                            <View key={i} style={styles.element}>
                                <CustomeCheckbox
                                    value={ele.value ? true : false}
                                    lable={ele.lable}
                                    onChange={addDataToField}
                                    index={i}
                                />
                            </View>
                        )
                    } else if (ele.type === "NUMBER" && typeof ele.value === 'string') {
                        return (
                            <View key={ele.value + i.toString} style={styles.element}>
                                <InputWithLable
                                    lable={ele.value}
                                    placeHolder={ele.lable}
                                    handleChange={addDataToField}
                                    isNumeric={true}
                                    index={i}
                                />
                            </View>
                        )
                    } else {
                        return (
                            <View key={i} style={styles.element}>
                                <Text>Invalid data type</Text>
                            </View>
                        )
                    }

                })
            }
            <Button
                backgroundColor="#DC4A9A"
                label="Delete"
                borderRadius={7}
                style={{ height: 45, marginBottom: 10, width: '46%' }}
                onPress={() => removeCategory(elementData.elementId)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: '#f1faff',
        padding: 14,
        borderRadius: 8
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 28
    },
    CategoryTitlecontainer: {
        marginBottom: 16
    },
    element: {
        marginBottom: 20
    }
});

export default CategoryElementForm;