import { View, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-ui-lib"

type HeaderProps = {
    title: string,
    onClickHandler: any
}

const Header = ({ title, onClickHandler }: HeaderProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.screenHeadingName}>{title}</Text>
            </View>
            <View>
                <Button
                    backgroundColor="#275070"
                    label="Add New Category"
                    borderRadius={7}
                    style={{ height: 45 }}
                    onPress={onClickHandler}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 14
    },
    screenHeadingName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#275070'
    }
})

export default Header;