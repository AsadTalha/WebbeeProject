import { View, StyleSheet, Text, TextInput } from "react-native"


type InputWithLableProps = {
    handleChange?: (index: number, value: any) => void,
    placeHolder?: string,
    lable: string,
    isNumeric?: boolean,
    index: number
}

const InputWithLable = ({ handleChange, lable, placeHolder, isNumeric, index }: InputWithLableProps) => {


    return (
        <View style={styles.container}>
            {placeHolder ? <View style={styles.placeHolder}>
                <Text style={styles.placeHolderText}>{placeHolder}</Text>
            </View> : null}
            <TextInput
                onChangeText={(e) => handleChange && handleChange(index, isNumeric ? e.replace(/[^0-9]/g, '') : e)}
                value={lable}
                placeholder="Enter"
                keyboardType={isNumeric ? "numeric" : "default"}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        paddingLeft: 14,
        borderRadius: 4,
        position: 'relative',
        borderColor: '#275070',
    },
    input: {
        fontSize: 18,
        color: '#275070'
    },
    placeHolder: {
        position: 'absolute',
        top: -8,
        left: 14,
        zIndex: 10,
        backgroundColor: '#f1faff',
    },
    placeHolderText: {
        fontSize: 14,
        color: 'grey',
        fontWeight: '600',
    },
});

export default InputWithLable;