import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Button, Text } from "react-native-ui-lib"

import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
type CustomePickerType = {
    onSelect: (value: string) => void
    FieldTypesArray: any,
    buttonText: string
}

const CustomePicker = ({ onSelect, FieldTypesArray, buttonText }: CustomePickerType) => {
    const [showModal, setShowMosal] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const selectValue = (value: string) => {
        setSelectedValue(value)
        setShowMosal(false)
        onSelect(value)
    }
    const newData = FieldTypesArray.map((ele: any) => { return ({ label: ele, value: ele }) })

    return (
        <Dropdown
            style={styles.button}
            placeholderStyle={styles.selectedTextStyle}
            selectedTextStyle={styles.selectedTextStyle}
            //   inputSearchStyle={styles.inputSearchStyle}
            iconColor={"#275070"}
            data={newData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={buttonText}
            searchPlaceholder="Search..."
            value={buttonText}
            itemTextStyle={styles.itemTextStyle}
            onChange={item => {
                // setValue(item.value);
                // setIsFocus(false);
                selectValue(item.value)
            }}
            renderLeftIcon={() => <Text></Text>}
            search={false}
        />
    )

    return (
        <View style={styles.container}>
            <Button
                backgroundColor="#275070"
                label={buttonText}
                borderRadius={7}
                style={{ height: 45, marginBottom: 10, width: '100%' }}
                onPress={() => setShowMosal(true)}
            />
            {
                showModal ?
                    <View style={styles.modalContainer}>
                        {
                            FieldTypesArray.map((ele: string) => {
                                return (
                                    <TouchableOpacity onPress={() => selectValue(ele)} key={ele}>
                                        <View style={styles.dropDownItem}>
                                            <Text style={styles.dropDownItemText}>{ele}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View> : null
            }

        </View >
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, position: 'relative', width: '100%' },
    button: {
        backgroundColor: "#275070",
        height: 45,
        marginBottom: 10,
        width: '100%',
        borderRadius: 8
    },
    modalContainer: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: -80,
        backgroundColor: '#ffffff',
        zIndex: 22,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#275070'
    },
    iconStyle: {
        color: "#275070"
    },
    selectedTextStyle: {
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
        marginRight: -15
    },
    dropDownItem: {
        height: 45,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#275070',
    },
    dropDownItemText: {
        fontWeight: '600',
        color: '#275070',
    },
    itemTextStyle: {
        fontWeight: '600',
        color: '#275070',
    }
});

export default CustomePicker