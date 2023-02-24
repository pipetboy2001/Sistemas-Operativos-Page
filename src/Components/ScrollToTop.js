import React, { useState, useEffect } from "react";
import { RxPinTop } from "react-icons/rx";


function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-to-top">
                    <RxPinTop/>
                </button>
            )}
        </>
    );
}

export default ScrollToTopButton;
