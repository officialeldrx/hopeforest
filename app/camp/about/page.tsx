import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

const sections: section[] = [
    {
        title: "Camp Hope",
        image: "/images/about-header.jpg",
    },
    {
        title: "What's been happening",
        body: `We are excited for two weeks of Camp Hope in 2026! In addition to Camp Hope this year, we will be adding an Adventure Week of camp, which will be exclusively for middle schoolers! This summer we're excited to welcome both elementary and middle schoolers for a time of fun, faith, and fellowship at camp!
`,
    },
    {
        title: "Camp Hope",
        body: `Camp Hope is a place where children ages 7-12 learn to know hope in Christ, renew their hope in Christ, and share their hope in Christ through godly relationships, intentional activities, and discovering the wonders of God’s creation. Camp Hope is a sleepaway camp held at Camp Bentley, three miles northwest of Drake, ND, on Highway 52.`,
        link: "/camp/hope",
        button: "Camp Info",
    },
    {
        title: "Adventure Week",
        body: `Adventure Week is the next step for campers after Camp Hope! Geared towards middle schoolers, Adventure Week is a place for middle schoolers in grades 6-8 to grow in their identity and hope in Christ through godly relationships, intentional activities, and God's creation.\n\nAdventure Week is a day camp held at Hope Forest, 231 Highway 2 W, Towner. Hope Forest is located on the south side of Highway 2. It is between Granville and Towner. If coming from the west, once you pass the Denbigh Forest sign, it is the next driveway on the right. Once you have pulled off the highway, stay on the driveway to the left.`,
        link: "/camp/adventure",
        button: "Adventure Week Info",
    },
    {
        title: "Psalm 78:2-4",
        body: `"I will declare wise sayings; I will speak mysteries from the past— things we have heard and known and that our ancestors have passed down to us. We will not hide them from their children, but will tell a future generation the praiseworthy acts of the Lord, his might, and the wondrous works He has performed."`,
        image: "/images/header-one.png",
        verse: true,
    },
    {
        title: "Volunteer Opportunities",
        body: `We're always looking for dedicated volunteers to help make Camp Hope a success. If you're interested in serving at Camp Hope, please click the button below to begin the application process.`,
        link: "/camp/volunteer",
        button: "Volunteer",
    },
    {
        title: "Forms",
        buttons: [
            {
                text: "Camp Hope Registration",
                link: "/camp/forms/register"
            },
            {
                text: "Adventure Week Registration",
                link: "/camp/forms/register/adventure"
            },
            {
                text: "Payment",
                link: "/camp/forms/payment"
            },
            {
                text: "Release Form",
                link: "/camp/forms/release"
            },
        ],
    },
]

export default function Page() {
    return <ContentPage sections={sections} />
}

