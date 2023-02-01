import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox, Assets, Text, View, Colors } from 'react-native-ui-lib'; //eslint-disable-line

type CustomeCheckboxType = {
    value: boolean,
    lable: string,
    onChange: (index: number, x: boolean) => void,
    index: number
}

const CustomeCheckbox = ({ value, lable, onChange, index }: CustomeCheckboxType) => {
    console.log('=!!!!!!!!!!!!!!!!!!!!!!!!', value)
    return (
        <View flex padding-page style={styles.container}>
            <Checkbox
                value={value}
                label={lable}
                color={Colors.green20}
                onValueChange={() => { onChange(index, !value) }}
                containerStyle={styles.checkbox}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    checkbox: {
        marginBottom: 20
    },
    row: {
        alignItems: 'center'
    },
    container: {
        height: 50,
        display: 'flex',
        borderWidth: 1,
        paddingLeft: 14,
        borderRadius: 4,
        position: 'relative',
        borderColor: '#275070',
        justifyContent: 'center',
        paddingTop: 20
    },
    lableText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#275070',
    }
})

export default CustomeCheckbox