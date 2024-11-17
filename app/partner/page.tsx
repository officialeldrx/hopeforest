"use client";

import { useEffect } from "react";
import ContentSection from "@/components/ui/content-section";

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

    return (
        <div className="flex flex-col gap-0 pt-16">
            <ContentSection
                title="Partner With Us"
                body={`At Hope Forest, we believe in the transformative power of hope and the positive impact it can have on lives. To continue spreading this hope and reaching more individuals, we are seeking financial support and partnerships. \n\n Your contribution will enable us to expand our outreach, organize meaningful events, and create resources that uplift and inspire. Together, we can make a lasting difference in the lives of those in need.`}
            />

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
