import { Platform, Text, TouchableOpacity } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import EventFormStyle from "../style/EventFormStyle";
import { isAfterToday } from "../../../utils/ImageValidator";

export const DateInput = ({ label = '', mode = 'date', onChangeDate, defaultDate = new Date(), editable = true  }) => {
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);
    const [date, setDate] = useState(defaultDate !== null ? defaultDate : new Date());

    const onChangeDateHandler = (selectedDate) => {
        setDate(selectedDate);
        onChangeDate(selectedDate);
        setShowDateTimePicker(false);
    }

    const loadDateByPlatform = () => {
        const DateComponent = <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={(event, selectedDate) => onChangeDateHandler(selectedDate)}
            style={{ width: '80%' }}
        />;

        if (Platform.OS === 'ios') return DateComponent;

        if (Platform.OS !== 'ios' && showDateTimePicker && editable) return DateComponent;

        return <TouchableOpacity onPress={() => setShowDateTimePicker(true)}>
            <Text style={{ color: 'gray' }}>{date === null ? 'Seleccionar fecha' : mode === 'time' ? date.toTimeString() : date.toDateString()}</Text>
        </TouchableOpacity>;
    }

    return (
        <>
            <Text style={styles.inputTitle}>{label}</Text>
            {loadDateByPlatform()}
        </>
    )
}

const styles = EventFormStyle;

export default DateInput;