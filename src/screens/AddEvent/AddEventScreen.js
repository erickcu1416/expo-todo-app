import React, { useState } from "react";
import AddEventStyle from "./style/AddEventStyle";
import EventForm from "../../components/EventForm/EventForm";
import useEvent from "../../hooks/useEvent";
import { useNavigation } from "@react-navigation/native";

const AddEventScreen = () => {
    const { doAddNewEvent } = useEvent();
    const navigation = useNavigation();
    const onSaveFormHandler = (eventForm) => {
        console.log('Form in screen', eventForm);
        doAddNewEvent(eventForm);
        alert('Event created');
        navigation.navigate('Home');
    }

    return (
        <EventForm onSaveForm={onSaveFormHandler} />
    )
}

const styles = AddEventStyle;

export default AddEventScreen;