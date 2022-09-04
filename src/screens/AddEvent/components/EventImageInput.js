import { useCallback } from "react";
import { Text, View } from "react-native";
import AddEventStyle from "../style/AddEventStyle";
import AddImageButton from "./AddImageButton";
import DocumentPicker from "react-native-document-picker";

const EventImageInput = ({ text = 'Desktop image', validWidth = 2340, validHeight = 700 }) => {

    const onPickFileHandler = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });

            console.log('ResPONSSSS', res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User cancelled the picker, exit any dialogs or menus and move on");
            } else {
                throw err;
            }
        }
    }

    return (
        <View style={[styles.inputContainer, { paddingBottom: 0, alignItems: 'center' }]}>
            <View>
                <Text style={styles.inputTitle}>{text}</Text>
                <Text style={{ color: '#00000040', fontSize: 12, maxWidth: '84%' }}>
                    The dimension must be {`${validWidth}x${validHeight}`} and must not exceed 800kb in size
                </Text>
            </View>
            <View style={{ marginLeft: -50 }}>
                <AddImageButton onClick={onPickFileHandler} />
            </View>
        </View>
    )
}

const styles = AddEventStyle;

export default EventImageInput;