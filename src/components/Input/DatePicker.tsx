import { useState } from "react";
import { View, Button, Text, Platform, StyleSheet } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker"

type CustomeDateTimePickerType = {
    value?: Date,
    handleChange: any,
    index: number
}

const CustomeDateTimePicker = ({ value, handleChange, index }: CustomeDateTimePickerType) => {
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        console.log('selectedDate', selectedDate)
        console.log('ON select date', index, currentDate)
        handleChange(index, currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.lableText}>Make date</Text>
            <View style={{ marginRight: 10 }}>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value ? new Date(value) : date}
                    mode={"date"}
                    is24Hour={true}
                    onChange={onChange}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        alignItems: 'center',
        borderWidth: 1,
        paddingLeft: 14,
        borderRadius: 4,
        position: 'relative',
        borderColor: '#275070',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lableText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#275070',
    }
})

export default CustomeDateTimePicker;