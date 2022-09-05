import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import FloatButton from '../../components/FloatButton/FloatButton';
import LineSeparator from '../../components/LineSeparator/LineSeparator';
import Separator from '../../components/Separator/Separator';
import { useEventContext } from '../../context/EventContext';
import useEvent from '../../hooks/useEvent';
import { EventItem } from './components/EventItem';

const HomeScreen = () => {
    const [isHidden, setIsHidden] = useState(false);
    const navigation = useNavigation();

    const { events } = useEventContext();

    useEffect(() => {
        console.log('Events in HOME', events);
    }, [events])


    const onClickFloatButtonHandler = () => {
        navigation.navigate('Add');
    }

    const onClickItemHandler = (event) => {
        console.log('ON CLICK EVENT', event);
        navigation.navigate('ViewEvent', {
            event
        });
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Events</Text>
                </View>
                
                {
                    events.map((event, i) => (
                        <EventItem onClickItem={onClickItemHandler} event={event} key={event.id} />
                    ))
                }

            </ScrollView>
            <FloatButton onClick={onClickFloatButtonHandler} />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'
    },
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#F7F8FA',
    }
});