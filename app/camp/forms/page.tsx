import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

const sections: section[] = [
    {
        title: "Payment",
        body: `To make a payment for camp, click the 'Payment' button. You can submit your non-refundable deposit of $25 or make a payment towards your balance through our secure online payment portal.`,
        buttons: [
            {
                text: "Payment for Camp Hope",
                link: "/camp/forms/payment",
            },
            {
                text: "Payment for Adventure Week",
                link: "/camp/forms/payment/adventure",
            }
        ]
    },
    {
        title: "Register",
        body: `Registration is now open! To register, click the 'Register' button below. Fill out the form, and submit a non-refundable $25 deposit through our secure online payment portal.`,
        buttons: [
            {
                text: "Register for Camp Hope",
                link: "/camp/forms/register/camp-hope"
            },
            {
                text: "Register for Adventure Week",
                link: "/camp/forms/register/adventure"
            }
        ]
    },
    {
        title: "Release Forms",
        body: `Fill out the forms that apply to your camper.`,
        buttons: [
            {
                text: "Release Form for Camp Hope",
                link: "/camp/forms/release/camp-hope",
            },
            {
                text: "Release Form for Adventure Week",
                link: "/camp/forms/release/adventure",
            }
        ]
    }
]

export default function Page() {
    return <ContentPage sections={sections} />
}
