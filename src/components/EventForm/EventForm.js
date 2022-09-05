import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet, TextInput, Switch, TouchableWithoutFeedback, Keyboard } from 'react-native';
import EventImageInput from "./components/EventImageInput";
import DateInput from "./components/DateInput";
import { DEFAULT_STATIC } from "../../constants/static";
import Separator from "../Separator/Separator";
import EventFormStyle from "./style/EventFormStyle";
import { isAfterToday, isValidURL } from "../../utils/ImageValidator";
import { OptionButton } from "./components/OptionButton";

const defaultOnSaveForm = () => {
    console.warn('NOT METHOD FOR onSaveForm')
}

const defaultOnDeleteForm = () => {
    console.warn('NOT METHOD FOR onPressDelete')
}

const EventForm = ({ onSaveForm = defaultOnSaveForm, modeView = false, event,  onPressDelete = defaultOnDeleteForm, }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [purchaseUrl, setPurcharseUrl] = useState('');
    const [desktopImage, setDesktopImage] = useState(null);
    const [mobileImage, setMobileImage] = useState(null);
    const [tabletImage, setTabletImage] = useState(null);


    const onPressAddEventHadler = () => {
        if (name === '') return alert('Name invalid');

        const isValidDate = isAfterToday(date);
        if (!isValidDate) return alert('Date invalid');

        if (!isValidURL(purchaseUrl)) return alert('URL invalid');

        const form = {
            name,
            date,
            time,
            purchaseUrl,
            desktopImage,
            mobileImage,
            tabletImage
        };

        onSaveForm(form);
    }

    const onPressDeleteEventHadler = () => {
        onPressDelete(event);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <View style={styles.container}>
                        <Text style={styles.title}> {modeView ? 'Event' : 'Add a event'} </Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Name</Text>
                            <TextInput
                                style={styles.textInput}
                                editable={!modeView}
                                defaultValue={modeView ? event.name : ''}
                                placeholder="Event"
                                placeholderTextColor="#00000030"
                                onChangeText={(text) => { setName(text) }}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <DateInput editable={!modeView} defaultDate={modeView ? event.date : null} label="Date" onChangeDate={(d) => { setDate(d) }} />
                        </View>
                        <View style={styles.inputContainer}>
                            <DateInput editable={!modeView} defaultDate={modeView ? event.time : null} label="Time" mode='time' onChangeDate={(d) => { setTime(d) }} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Url</Text>
                            <TextInput
                                editable={!modeView}
                                defaultValue={modeView ? event.purchaseUrl : ''}
                                style={styles.textInput}
                                placeholder="Url"
                                placeholderTextColor="#00000030"
                                onChangeText={(text) => { setPurcharseUrl(text) }}
                            />
                        </View>

                        <EventImageInput
                            editable={!modeView}
                            uri={modeView ? event.desktopImage ? event.desktopImage.base64File : null : null}
                            validWidth={DEFAULT_STATIC.DESKTOP_IMAGE_VALID_DIMENSIONS.VALID_WIDTH}
                            validHeight={DEFAULT_STATIC.DESKTOP_IMAGE_VALID_DIMENSIONS.VALID_HEIGHT}
                            onChangeImage={(desktopImageValue) => setDesktopImage(desktopImageValue)}
                            text="Desktop image" />
                        <Separator />

                        <EventImageInput
                            editable={!modeView}
                            uri={modeView ? event.tabletImage ? event.tabletImage.base64File : null : null}
                            validWidth={DEFAULT_STATIC.TABLET_IMAGE_VALID_DIMENSIONS.VALID_WIDTH}
                            validHeight={DEFAULT_STATIC.TABLET_IMAGE_VALID_DIMENSIONS.VALID_HEIGHT}
                            onChangeImage={(tabletImageValue) => setTabletImage(tabletImageValue)}
                            text="Tablet image" />
                        <Separator />

                        <EventImageInput
                            editable={!modeView}
                            uri={modeView ? event.mobileImage ? event.mobileImage.base64File : null : null}
                            validWidth={DEFAULT_STATIC.MOBILE_IMAGE_VALID_DIMENSIONS.VALID_WIDTH}
                            validHeight={DEFAULT_STATIC.MOBILE_IMAGE_VALID_DIMENSIONS.VALID_HEIGHT}
                            onChangeImage={(mobileImageValue) => setMobileImage(mobileImageValue)}
                            text="Mobile image" />

                        {
                            !modeView ?
                            <OptionButton onPress={onPressAddEventHadler}/> :
                            <OptionButton text={'Delete'} color={'red'} onPress={onPressDeleteEventHadler}/>
                        }
                       
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = EventFormStyle;

export default EventForm;