"use client";

import { useEffect } from "react";
import ContentSection, { section } from "@/components/ui/content-section";

export default function Page() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.breezechms.com/js/give.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const section: section = {
        title: "Partner With Us",
        body: `We know there is a hurting world out there with no hope to hold onto. We feel God calling us to be a beacon of hope in a dark world. As we do that though, we want to be listening to the Lord and stepping through doors as He opens them. Prayerfully we go armed with the gospel and holding out hope. \n\n Your partnersship will enable us to expand our outreach, organize meaningful events, and create resources that uplift and inspire. Together, we can make a lasting difference in the lives of those in need.`
    }

    return (
        <div className="flex flex-col gap-0 pt-10">
            <ContentSection section={section} />

            <div
                style={{ width: "100%" }}
                id="breeze_giving_embed"
                data-subdomain="hopeforest"
                data-width="100%"
                data-background_color="ffffff"
                data-text_color="000000"
                data-donate_button_background_color="CEEDA7"
                data-donate_button_text_color="000000"
                data-fund_id=""
                data-frequency=""
                data-amount=""
            />
        </div>
    );
}
