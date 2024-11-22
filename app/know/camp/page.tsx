import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: "Camp Hope",
        image: "/images/camp-promo.png",
        link: "https://photos.app.goo.gl/PC4e261rExBtLSAP9",
        button: "View Full Camp Album"
    },
    {
        title: "What's been happening",
        body: `We're preparing for two exciting weeks of Camp Hope in 2025! Last year, 87 campers joined us for an unforgettable experience, and we saw 9 campers respond to the gospel. This year, we're excited to welcome even more children for a time of fun, faith, and fellowship.`
    },
    {
        title: "Activities",
        body: `Campers will enjoy a variety of activities, including swimming, canoeing, sports, campfires, Bible lessons, and more! Each activity is designed to build friendships, foster growth, and create lasting memories.`
    },
    {
        title: "Matthew 19:14",
        body: `"Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."`,
        image: "/images/header-one.png",
        verse: true
    },
    {
        title: "Registration",
        body: `Registration opens on February 1st! Secure your spot early to be part of this life-changing experience.`
    },
    {
        title: "Why Camp Hope?",
        body: `Camp Hope is a safe, nurturing environment where children ages 7-12 can explore their faith, develop meaningful relationships, and discover the wonders of God's creation. It's more than just a camp—it's an opportunity for spiritual renewal and personal growth.`
    }
]

export default function Page() {
    return <ContentPage sections={sections} />
}