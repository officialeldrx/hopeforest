import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

const sections: section[] = [
    {
        title: "Camp Hope",
        image: "/images/camp-header.jpg",
    },
    {
        title: "Time",
        body: "Week 1: July 26-31\nWeek 2: August 2-7"
    },
    {
        title: "Ages",
        body: 'Kids ages 7-12 welcome.'
    },
    {
        title: "Cost",
        body: "$150 (includes a camp t-shirt)\n\nIf you are in need of sponsorship, please send your deposit and pay as much as possible when you arrive at camp. The balance of your fee will be covered by our Campership Fund"
    },
    {
        title: "Location",
        body: "Camp is held at Camp Bentley, three miles northwest of Drake, ND, on Highway 52.\n\nCheck-in: Sunday, 3:00-5:00pm\nClosing Rally: Friday, 11:30 am (family and friends are welcome to attend!)",
        image: '/images/tugofwar2.jpg'
    },
    {
        title: "Bus Transportation",
        body: "Week 1 (July 26-31):\nBuses from Williston, Tioga, and Minot\n\nWeek 2 (August 2-7):\nBuses from Bottineau, Rugby, and Minot\n\nSpecific pickup times and locations will be provided upon registration.",
    },
    {
        title: "Packing List",
        body: "• Bible\n• Toiletries (soap, shampoo, toothbrush, etc.)\n• Swimsuit (must be modest - boys: trunk style, girls: one piece.)\n• Towel\n• Sleeping bag and pillow\n• Extra blankets (if desired)\n• Sunscreen, bug repellent\n• Water bottle\n• Clothing suitable for all weather (please pack a sweatshirt or jacket.)\n• Snackery spending money ($12 limit)\n• Label all clothing\n• Electronics are not allowed (cell phones, smart watches, tablets, etc.). Any electronics brought to camp will be kept in a safe until the end of the week.\n• Please do not bring any valuables or weapons.",
        image: '/images/arms.jpg'
    },
    {
        title: "Health and Safety",
        body: "A medical professional is always on the grounds and hospitals are within a short drive.",
    },
    {
        title: "Cabin Arrangements",
        body: "• Campers are housed in cabins according to their gender at birth\n• Counselors are the same gender (at birth) as their campers\n• No mixed-gender cabins are permitted\n• Campers are grouped by age: 7-9 years old together and 10-12 years old together",
    },
    {
        title: "Activities",
        body: "Swimming, canoeing, BB guns, waterslides, campfires, Verse-O-Rama, basketball, singing, Bible lessons, chapel, pontoon rides, archery, and more!",
    },
    {
        title: "Register",
        body: "Registration is now open! To register, click the 'Register' button. Fill out the form and submit a non-refundable $25 deposit through our secure online payment portal.",
        button: 'Register Now',
        link: '/camp/forms/register'
    },
    {
        title: "",
        body: "Camp Directors:\nTodd and Kim Erickson\nPhone: 701-339-0525\nEmail: kim@hopeforestnd.com",
    }
]

export default function Page() {
    return <ContentPage sections={sections} />
}

