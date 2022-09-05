import { Text, TouchableOpacity } from "react-native"
import EventFormStyle from "../style/EventFormStyle";

export const OptionButton = ({onPress, text = 'Done', color = '#000000'}) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={[styles.button, {backgroundColor: color,}]}>
            <Text style={{ color: 'white' }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = EventFormStyle;