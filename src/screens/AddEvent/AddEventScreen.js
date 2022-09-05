import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet, TextInput, Switch, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddEventStyle from "./style/AddEventStyle";
import EventImageInput from "./components/EventImageInput";
import Separator from "../../components/Separator/Separator";
import DateInput from "./components/DateInput";
import { DEFAULT_STATIC } from "../../constants/static";

const AddEventScreen = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [purchaseUrl, setPurcharseUrl] = useState('');

    const [withAlert, setWithAlert] = React.useState(false);

    const onPressAddEventHadler = () => {
        console.log('Agregar evento');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Add a event</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Name</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Event"
                                placeholderTextColor="#00000030"
                                onChangeText={(text) => { setName(text) }}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <DateInput label="Date" onChangeDate={(d) => { setDate(d) }} />
                        </View>
                        <View style={styles.inputContainer}>
                            <DateInput label="Time" mode='time' onChangeDate={(d) => { setTime(d) }} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Url</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Url"
                                placeholderTextColor="#00000030"
                                onChangeText={(text) => { setPurcharseUrl(text) }}
                            />
                        </View>

                        <EventImageInput
                            validWidth={DEFAULT_STATIC.DESKTOP_IMAGE_VALID_DIMENSIONS.VALID_WIDTH}
                            validHeight={DEFAULT_STATIC.DESKTOP_IMAGE_VALID_DIMENSIONS.VALID_HEIGHT}
                            text="Desktop image" />
                        <Separator />

                        <EventImageInput
                            validWidth={DEFAULT_STATIC.TABLET_IMAGE_VALID_DIMENSIONS.VALID_WIDTH}
                            validHeight={DEFAULT_STATIC.TABLET_IMAGE_VALID_DIMENSIONS.VALID_HEIGHT}
                            text="Tablet image" />
                        <Separator />

                        <EventImageInput
                            validWidth={DEFAULT_STATIC.MOBILE_IMAGE_VALID_DIMENSIONS.VALID_WIDTH}
                            validHeight={DEFAULT_STATIC.MOBILE_IMAGE_VALID_DIMENSIONS.VALID_HEIGHT}
                            text="Mobile image" />

                        <TouchableOpacity onPress={onPressAddEventHadler} style={styles.button}>
                            <Text style={{ color: 'white' }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = AddEventStyle;

export default AddEventScreen;