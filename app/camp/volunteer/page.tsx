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

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfoRNbBp17vl20iYNt9HCQ1Hm2U2Pdb-wMqSBzw1eTIxfXo6w/viewform?embedded=true" width="100%" height="2503">Loading…</iframe>

            <span style={{ paddingBottom: "1em" }}>&copy; {currentYear} Hope Forest</span>
        </div>
    )
}
