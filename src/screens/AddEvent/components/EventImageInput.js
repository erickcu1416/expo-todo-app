import { useCallback, useState } from "react";
import { Image, Text, View } from "react-native";
import AddEventStyle from "../style/AddEventStyle";
import AddImageButton from "./AddImageButton";
// import DocumentPicker from "react-native-document-picker";
import * as DocumentPicker from 'expo-document-picker';
import Separator from "../../../components/Separator/Separator";
import { isValidImageDimensionsPromise } from "../../../utils/ImageValidator";
import { DEFAULT_STATIC } from "../../../constants/static";

const EventImageInput = ({ text = 'Desktop image', validWidth = 2340, validHeight = 700 }) => {

    const [imageFile, setImageFile] = useState(null);

    const _pickDocument = async () => {

        let result = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
            multiple: false
        });

        if (result.size > DEFAULT_STATIC.VALID_IMAGE_SIZE) {
            return alert('Invalid image size');
        }

        const isValidImage = await isValidImageDimensionsPromise(result.uri, validWidth, validHeight);

        if (!isValidImage) {
            return alert('Invalid dimensions');
        }

        setImageFile(result.uri);
    }

    return (
        <>
            <View style={[styles.inputContainer, { paddingBottom: 0, alignItems: 'center' }]}>
                <View>
                    <Text style={styles.inputTitle}>{text}</Text>
                    <Text style={{ color: '#00000040', fontSize: 12, maxWidth: '84%' }}>
                        The dimension must be {`${validWidth}x${validHeight}`} and must not exceed 800kb in size
                    </Text>
                </View>
                <View style={{ marginLeft: -50 }}>
                    <AddImageButton onClick={_pickDocument} />
                </View>
            </View>

            <Separator size={5} />
            {imageFile && <Image source={{ uri: imageFile }} style={{ width: 250, height: 250, borderWidth: 1 }} />}
            <Separator size={5} />
        </>
    )
}

const styles = AddEventStyle;

export default EventImageInput;