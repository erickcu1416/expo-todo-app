import { useEffect, useState } from 'react';
import { useEventContext } from '../context/EventContext';

const defaultOnComplete = () => {
    console.log('OnComplete')
}

const useEvent = (onComplete = defaultOnComplete) => {
	const [eventsState, setEventsState] = useState([]);

	const { events, handleAddNewEvent, handleDeleteEvent } = useEventContext();

	useEffect(() => {
        console.log('Actualizando events', events)
		setEventsState(events);
	}, []);

    const doAddNewEvent = (event) => {
        handleAddNewEvent(event);
        onComplete(events);
    }

    const doDeleteEvent = (event) => {
        handleDeleteEvent(event);
        onComplete(events);
    }

	return { eventsState, doAddNewEvent, doDeleteEvent };
};

export default useEvent;
