import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const HeaderContext = createContext({ name: "Header" });

export const HeaderContextProvider = ({
    children,
    initialState = { showHeader: false, title: "", subtitle: "" },
}) => {
    const [state, setState] = useState(initialState);

    useEffect(() => { }, []);

    const handleShowHeader = (data) => {
        setState({ ...state, showHeader: true });
    };

    const handleHideHeader = (data) => {
        setState({ ...state, showHeader: false });
    };

    const value = {
        ...state,
        handleShowHeader,
        handleHideHeader,
    };

    return (
        <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
    );
};

HeaderContextProvider.propTypes = {
    children: PropTypes.node,
    initialState: PropTypes.object,
};

export const useHeaderContext = () => {
    const headerContext = useContext(HeaderContext);

    if (typeof headerContext === "undefined") {
        throw new Error(
            "useHeaderContext must be used within a HeaderContextProvider"
        );
    }

    return headerContext;
};
