import { useCallback, useState } from "react";
import { Image, Text, View } from "react-native";
import AddImageButton from "./AddImageButton";
// import DocumentPicker from "react-native-document-picker";
import * as DocumentPicker from 'expo-document-picker';
import Separator from "../../../components/Separator/Separator";
import { isValidImageDimensionsPromise } from "../../../utils/ImageValidator";
import { DEFAULT_STATIC } from "../../../constants/static";
import EventFormStyle from "../style/EventFormStyle";
import * as FileSystem from 'expo-file-system';

const defaultOnChangeImage = () => {
    console.warn('NOT EXIST METHOD OnChangeImage')
}

const EventImageInput = ({ uri = null, editable = true, text = 'Desktop image', validWidth = 2340, validHeight = 700, onChangeImage = defaultOnChangeImage }) => {

    console.log('URI iN VIEW', uri);

    const [imageFile, setImageFile] = useState(uri);

    const _pickDocument = async () => {

        let result = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
            multiple: false,
            copyToCacheDirectory: true
        });

        const base64File = await FileSystem.readAsStringAsync(result.uri,
            { encoding: FileSystem.EncodingType.Base64 });
        console.log('BASE', base64File)

        if (result.size > DEFAULT_STATIC.VALID_IMAGE_SIZE) {
            return alert('Invalid image size');
        }

        const isValidImage = await isValidImageDimensionsPromise(result.uri, validWidth, validHeight);

        if (!isValidImage) {
            return alert('Invalid dimensions');
        }

        setImageFile('data:image/png;base64,' + base64File);
        onChangeImage({...result, base64File: 'data:image/png;base64,' + base64File});
    }

    return (
        <>
            <View style={[styles.inputContainer, { paddingBottom: 0, alignItems: 'center' }]}>
                <View>
                    <Text style={styles.inputTitle}>{text}</Text>
                    {
                        editable ?
                            <Text style={{ color: '#00000040', fontSize: 12, maxWidth: '84%' }}>
                                The dimension must be {`${validWidth}x${validHeight}`} and must not exceed 800kb in size
                            </Text> : null
                    }
                    {
                        !editable && !uri ?
                            <Text style={{ color: '#00000040', fontSize: 12, maxWidth: '84%' }}>
                                No image
                            </Text> : null
                    }
                </View>
                {
                    editable ?
                        <View style={{ marginLeft: -50 }}>
                            <AddImageButton onClick={_pickDocument} />
                        </View> : null
                }
            </View>

            <Separator size={5} />
            {imageFile && <Image source={{ uri: imageFile }} style={{ width: 250, height: 250, borderWidth: 1 }} />}
            <Separator size={5} />
        </>
    )
}

const styles = EventFormStyle;

export default EventImageInput;