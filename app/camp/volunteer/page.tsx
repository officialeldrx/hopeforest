"use client"

import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

import { useEffect, useState } from "react"

const sections: section[] = [
    {
        title: "Volunteer Opportunities",
        image: "/images/volunteer.jpg",
        body: `Our mission with camp is to create a safe place for children to enjoy God’s creation, to develop healthy friendships, to feel known and loved by safe adults and teens, and to learn about and have an opportunity to know God through Jesus. We cannot do that alone. We are so grateful for how the Lord provides wonderful volunteers year after year to serve children at camp.  There are various ways one can serve at camp. We need teachers, dishwashers, cooks, grandparents, counselors (we put an adult and teen in each cabin), small group leaders, mini camper leaders, Bible teachers, and so much more!  If you have young children, don’t let that deter you either!  We have a mini camper program for ages 1-7. You can check your children into childcare while you serve in your role.  If you have camper-age children, register them for camp and come along and serve while they are there.  Below you will find an application to fill out if you are interested in serving with us.`,
    },
    {
        title: 'Volunteer Selection',
        body: 'Camp Hope is extremely careful about how we select volunteers. All volunteers must fill out our application for review, have a personal relationship with Jesus Christ, and agree with our statement of faith and practices.'
    },
    {
        title: "Contact",
        body: 'If you have questions, please contact Kim @ 701-339-0525 or kim@hopeforestnd.com.'
    }
]

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
        <div>
            <ContentPage sections={sections} />

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
        </div>
    )
}
