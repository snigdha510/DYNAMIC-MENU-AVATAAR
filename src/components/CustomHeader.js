import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./CustomHeader.module.scss";

const CustomHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowSize.width > 768 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [windowSize.width, isMenuOpen]);

    const toggleMenuHandler = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                Dynamic Navigation
                <nav
                    className={`${styles.headerNav} ${
                        isMenuOpen && windowSize.width < 768 ? styles.menuOpen : ""
                    }`}
                >
                    <ul>
                        <li>PageOne</li>
                        <li>PageTwo</li>
                        <li>PageThree</li>
                    </ul>
                </nav>
                <div className={styles.headerToggle}>
                    {!isMenuOpen ? (
                        <BiMenuAltRight onClick={toggleMenuHandler} />
                    ) : (
                        <AiOutlineClose onClick={toggleMenuHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default CustomHeader;
