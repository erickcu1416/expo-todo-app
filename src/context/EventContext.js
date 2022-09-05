import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const EventContext = createContext({ name: "Event" });

export const EventContextProvider = ({
    children,
    initialState = { events: [] },
}) => {
    const [state, setState] = useState(initialState);

    useEffect(() => { }, []);

    const handleAddNewEvent = (event) => {
        const d = new Date();
        let ms = d.valueOf();
        const copyEventState = state.events;
        copyEventState.push({...event, id: ms});
        setState({...state, events: copyEventState});
    }

    const handleDeleteEvent = (event) => {
        const id = event.id;
        const copyEventState = state.events;
        const newEvents = copyEventState.filter(e => e.id !== id);

        setState({...state, events: newEvents});
    }

    const value = {
        ...state,
        handleAddNewEvent,
        handleDeleteEvent
    };

    return (
        <EventContext.Provider value={value}>{children}</EventContext.Provider>
    );
};

EventContextProvider.propTypes = {
    children: PropTypes.node,
    initialState: PropTypes.object,
};

export const useEventContext = () => {
    const eventContext = useContext(EventContext);

    if (typeof eventContext === "undefined") {
        throw new Error(
            "useEventContext must be used within a EventContextProvider"
        );
    }

    return eventContext;
};
