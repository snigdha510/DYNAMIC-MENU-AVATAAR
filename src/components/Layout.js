import React from "react";
import CustomHeader from "./CustomHeader";

import styles from "./CustomLayout.module.scss";

const CustomLayout = ({ children }) => {
    return (
        <>
            <CustomHeader />
            <div className={styles.mainContainer}>{children}</div>
        </>
    );
};

export default CustomLayout;
