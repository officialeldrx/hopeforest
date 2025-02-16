import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

const sections: section[] = [
    {
        title: "Camp Hope",
        link: "/camp/register",
        image: "/images/camp3.webp",
        button: "Register",
    },
    {
        title: "Two Sessions!",
        body: "Session 1: July 27-August 1\nSession 2: August 3-8\n\nCamp Hope is a place where children ages 7-12 learn to know hope in Christ, renew their hope in Christ, and to share hope in Christ through godly relationships, intentional activities, and discovering the wonders of God's creation.",
    },
    {
        title: "Activities",
        body: "Swimming, canoeing, BB guns, waterslide, campfires, Verse-O-Rama, basketball, singing, Bible lessons, chapel, pontoon rides, archery and more!\n\nCampers are allowed to swim only while a qualified life guard is on duty.",
    },
    {
        title: "Location & Important Times",
        body: "Camp is held at Camp Bentley, three miles northwest of Drake, ND on Highway 52.\n\nCheck In: Sunday, 3:00-5:00\nClosing Rally: Friday, 11:30 am (family and friends are welcome to attend!)",
    },
    {
        title: "Cost",
        body: "The cost of camp is $150 for the week, which includes a camp shirt. A non-refundable deposit of $25 is required with your registration to reserve your spot.\n\nIf you are in need of sponsorship, please send your deposit and pay as much as possible when you arrive at camp. The balance of your fee will be covered by our Campership Fund.",
    },
    {
        title: "Bus Transportation",
        body: "Week 1 (July 27-August 1):\nBuses from Williston, Tioga, and Minot\n\nWeek 2 (August 3-8):\nBuses from Bottineau, Rugby, and Minot\n\nSpecific pickup times and locations will be provided upon registration.",
    },
    {
        title: "Packing List",
        body: "• Bible\n• Toiletries (soap, shampoo, toothbrush, etc.)\n• Swimsuit (must be modest - boys: trunk style, girls: one piece.)\n• Towel\n• Sleeping bag and pillow\n• Extra blankets (if desired)\n• Sunscreen, bug repellent\n• Water bottle\n• Clothing suitable for all weather (please pack a sweatshirt or jacket.)\n• Snackery spending money ($12 limit)\n• Label all clothing\n• Electronics are not allowed (cell phones, smart watches, tablets, etc.). Any electronics brought to camp will be kept in a safe until the end of the week.\n• Please do not bring any valuables or weapons.",
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
        title: "Contact Information",
        body: "Camp Directors:\nTodd and Kim Erickson\nPhone: 701-339-0525\nEmail: kim@hopeforestnd.com\n\nSend Mail to Camp:\nCamper's Name\nc/o Camp Hope\nPO Box 102\nDrake, ND 58036\n\nHope Forest Ministry Address:\nPO Box 3570\nMinot, ND 58702",
    },
]

export default function Page() {
    return <ContentPage sections={sections} />
}

