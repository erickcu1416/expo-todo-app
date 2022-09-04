import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import FloatButton from '../../components/FloatButton/FloatButton';
import EventImageInput from '../AddEvent/components/EventImageInput';

const HomeScreen = () => {
    const [isHidden, setIsHidden] = useState(false);
    const navigation = useNavigation();
    
    const onClickFloatButtonHandler = () => {
        navigation.navigate('Add');
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Events</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#3478F6' }}>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
                    </TouchableOpacity>
                </View>
                <EventImageInput/>
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