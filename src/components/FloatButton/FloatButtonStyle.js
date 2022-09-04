import { StyleSheet } from "react-native";

const FloatButtonStyle = StyleSheet.create({
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 50,
        right: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .5,
        shadowRadius: 5,
        elevation: 5,
    },
    plus: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: -9,
        left: 7,
    }
});

export default FloatButtonStyle;