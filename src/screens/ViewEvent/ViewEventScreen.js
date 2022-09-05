import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import EventForm from "../../components/EventForm/EventForm"
import useEvent from "../../hooks/useEvent";

export const ViewEventScreen = ({ route }) => {
    const { event } = route.params;

    const navigation = useNavigation();

    const { doDeleteEvent } = useEvent();

    const onCompleteDelete = () => {
        doDeleteEvent(event);
        alert('Event eliminated');
        navigation.navigate('Home');
    }

    const onPressDeleteHandler = () => {
        Alert.alert('', 'Are you sure you want to delete the event?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: onCompleteDelete},
        ]);
    }
    return (
        <EventForm onPressDelete={onPressDeleteHandler} modeView event={event} />
    )
}