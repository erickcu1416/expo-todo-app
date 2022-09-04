import { Text, TouchableOpacity } from "react-native";
import FloatButtonStyle from "./FloatButtonStyle";

function onDefaultClickHandler() {
    console.log('Press Float Button')
}

const FloatButton = ({text = '+', onClick = onDefaultClickHandler}) => {
    return (
        <TouchableOpacity
            style={FloatButtonStyle.button}
            onPress={() => onClick()}
        >
            <Text style={FloatButtonStyle.plus}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default FloatButton;
