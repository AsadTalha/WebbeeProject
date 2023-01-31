import { View, StyleSheet, Text, TextInput } from "react-native"


type InputWithLableProps = {
    handleChange?: (value: string) => void,
    placeHolder?: string,
    lable: string,
}

const InputWithLable = ({ handleChange, lable, placeHolder }: InputWithLableProps) => {


    return (
        <View style={styles.container}>
            {placeHolder ? <View style={styles.placeHolder}>
                <Text style={styles.placeHolderText}>{placeHolder}</Text>
            </View> : null}
            <TextInput
                onChangeText={(e) => handleChange && handleChange(e)}
                value={lable}
                placeholder="Enter"
                keyboardType="numeric"
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