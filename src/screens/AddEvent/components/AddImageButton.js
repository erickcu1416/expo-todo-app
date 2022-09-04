import { StyleSheet, Text, TouchableOpacity } from "react-native";

const onClickDefault = () => {
    console.warn('Click Method not exist')
}

const AddImageButton = ({ onClick = onClickDefault }) => {
    return (
        <TouchableOpacity
            style={style.button}
            onPress={() => onClick()}
        >
            <Text style={style.plus}>
                +
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#0000',
        shadowOpacity: .1,
        shadowRadius: 5,
        elevation: 5,
    },
    plus: {
        fontSize: 40,
        color: '#000',
        position: 'absolute',
        top: -10,
        left: 8,
    }
});

export default AddImageButton;