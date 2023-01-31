import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Button, Text } from "react-native-ui-lib"

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
    }
});

export default CustomePicker