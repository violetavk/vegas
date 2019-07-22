import React from "react";
import titleScreenStyles from "./titleScreen.module.css";

export default () => {
    return (
        <section className={titleScreenStyles.container}>
            <div className={titleScreenStyles.inner}>
                <div className={titleScreenStyles.names}>Violet + Thomas</div>
                <div className={titleScreenStyles.gettingMarried}>
                    We're getting married
                </div>
                <div className={titleScreenStyles.highLevelInfo}>
                    October 19, 2019 / Red Rock Canyon / Las Vegas, Nevada
                </div>
            </div>
        </section>
    );
};
