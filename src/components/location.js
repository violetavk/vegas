import React from "react";
import locationStyles from "./location.module.css";

export default () => {
    return (
        <section className={locationStyles.container}>
            <div className={locationStyles.header}>Wedding Details</div>
            <div className={locationStyles.description}>
                We're going to have the ceremony at the overlook at Red Rock
                Canyon, followed by dinner and drinks at the beautiful Americana
                restaurant in Las Vegas. Dress code isn't super strict; anything
                nice will do!
            </div>
            <div className={locationStyles.subheader}>The "I DO's"</div>
            <div className={locationStyles.details}>
                5:00 PM
                <br />
                Red Rock Canyon Overlook
                <br />
                Las Vegas, Nevada
            </div>
            <div className={locationStyles.subheader}>The Reception</div>
            <div className={locationStyles.details}>
                7:00 PM
                <br />
                Americana
                <br />
                Las Vegas, Nevada
            </div>
        </section>
    );
};
