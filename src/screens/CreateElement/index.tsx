import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { useAppSelector, useAppDispatch } from "../../store/hooks"

interface LoginProps {
    name?: String,
    navigation: DrawerNavigationProp<any, any>
}

const CreateElement = ({ name, navigation }: LoginProps) => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector(state => state.counter);

    console.log('===========counter', counter)
    return (
        <View>
            <Text>I am CreateElement screen</Text>
            <Text>{name?.toLocaleUpperCase()}</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
});

export default CreateElement;
