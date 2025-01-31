"use client"

import { useEffect, useState } from "react"

export default function Home() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://app.breezechms.com/js/form_embed.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div
            style={{
                boxSizing: "border-box",
                fontFamily: "'Roboto', sans-serif",
                padding: "3em 1em 0em 1em",
                margin: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1em",
            }}
        >
            <img
                src="/icons/camp_hope.png"
                style={{
                    height: "10em",
                    maxWidth: "100%",
                    objectFit: "contain",
                }}
                alt="Camp Hope"
            />

            <div
                style={{ width: "100%", maxWidth: "30em" }}
                className="breeze_form_embed"
                data-subdomain="hopeforest"
                data-address="camphope"
                data-width="100%"
                data-border_width="0"
                data-border_color="000000"
                data-background_color="ffffff"
                data-button_color="92b765"
            ></div>

            <span style={{ paddingBottom: "1em" }}>&copy; {currentYear} Hope Forest</span>
        </div>
    )
}
