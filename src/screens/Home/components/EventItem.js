import { Text, TouchableOpacity, View } from "react-native"
import LineSeparator from "../../../components/LineSeparator/LineSeparator"
import Separator from "../../../components/Separator/Separator"

const defaultOnClickItem = () => {
    console.log('Click item')
}

export const EventItem = ({event, onClickItem = defaultOnClickItem}) => {
    return (
        <TouchableOpacity onPress={() => {onClickItem(event)}}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        selectable
                        style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: '#737373',
                            width: '40%'
                        }}
                    >{event.name}</Text>
                    <Text
                        selectable
                        style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: '#737373',
                            width: '50%'
                        }}
                    >{event.date.toLocaleDateString() + ' ' + event.time.toLocaleTimeString()}</Text>
                    <Text
                        selectable
                        style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#245',
                            width: '10%'
                        }}
                    >View</Text>
                </View>
                <Text style={
                    {
                        fontSize: 13,
                        color: '#a3a3a3',
                        fontWeight: '500',
                    }}
                >{event.purchaseUrl}</Text>
            </View>
            <Separator size={5} />
            <LineSeparator />
            <Separator />
        </TouchableOpacity>
    )
}