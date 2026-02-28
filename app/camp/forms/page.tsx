import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

const sections: section[] = [
    {
        title: "Adventure Week",
        image: "/images/camp-promo.webp",
    },
    {
        title: "Register for Camp",
        body: `Registration is now open! To register, click the 'Camp Registration' button. Fill out the form, and submit a non-refundable $25 deposit through our secure online payment portal.`,
        link: "/camp/forms/register",
        button: "Camp Registration",
    },
    {
        title: "Register for Adventure Week",
        body: `To register for Adventure Week, click the 'Adventure Registration' button. Fill out the form, and submit a non-refundable $25 deposit through our secure online payment portal.`,
        link: "/camp/forms/register/adventure",
        button: "Adventure Registration",
    },
    {
        title: "Payment",
        body: `To make a payment for camp, click the 'Payment' button. You can submit your non-refundable deposit of $25 or make a payment towards your balance through our secure online payment portal.`,
        link: "/camp/forms/payment",
        button: "Payment",
    },
    {
        title: "Release Form",
        body: `All campers must have a completed release form on file before attending camp. To submit your camper's release form, click the 'Release Form' button and fill out the form.`,
        link: "/camp/forms/release",
        button: "Release Form",
    },
    {
        title: "Volunteer Application",
        body: `If you're interested in volunteering at Camp Hope or Adventure Week, click the 'Volunteer Application' button to fill out our volunteer application form. We are so grateful for our volunteers and would love to have you join us!`,
        link: "/camp/volunteer",
        button: "Volunteer Application",
    }
]

export default function Page() {
    return <ContentPage sections={sections} />
}