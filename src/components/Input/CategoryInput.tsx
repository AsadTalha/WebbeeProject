import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { View, TextField, Assets, Icon } from "react-native-ui-lib"

import InputWithLable from "./InputWithLable";

type FieldType = {
    lable: string,
    type: string
}

type LabledInputProps = {
    onChangeText: (index: number, value: string) => void,
    data: FieldType,
    index: number,
    reMoveField: (index: number) => void
}

const Categoryinput = ({ onChangeText, data, index, reMoveField }: LabledInputProps) => {

    const handleChange = (value: string) => {
        onChangeText(index, value)
    };

    return (
        <View style={styles.container}>
            <View style={styles.secion1}>
                <InputWithLable
                    handleChange={handleChange}
                    placeHolder="Field"
                    lable={data.lable}

                />
            </View>
            <View style={styles.secion2}>
                <Text style={styles.typeText}>{data.type}</Text>
                <TouchableOpacity onPress={() => reMoveField(index)}>
                    <View>
                        <Icon
                            size={20}
                            tintColor={'#DC4A9A'}
                            source={Assets.icons.x}
                        />
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 16
    },
    secion1: {
        maxWidth: '70%',
        minWidth: '50%',
        flexGrow: 1
    },
    secion2: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '30%',
        maxWidth: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
        paddingLeft: 14

    },
    typeText: {
        fontSize: 16,
        color: '#275070',
        fontWeight: '600'
    }
});

export default Categoryinput;