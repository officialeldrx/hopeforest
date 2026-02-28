import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

const sections: section[] = [
    {
        title: "Adventure Week",
        image: "/images/tugofwar.jpg",
    },
    {
        title: "Overview",
        body: `Adventure Week is the next step for campers after Camp Hope! Geared towards middle schoolers, Adventure Week is a place for middle schoolers in grades 6-8 to grow in their identity and hope in Christ through godly relationships, intentional activities, and God's creation. Adventure Week is a day camp held at Hope Forest, 231 Highway 2 W, Towner.`,
        link: "/camp/forms/register/adventure",
        button: "Register",
    },

    {
        title: "Time and Ages",
        body: `Ages: Grades 6-8\nJune 21st-25th\nSunday 2pm-7pm\nMon-Thurs 9am-4pm\nCheck-in: Sunday, 1:30pm`,
    },
    {
        title: "Cost",
        body: `$100 (includes a camp t-shirt)\nIf you are in need of sponsorship, please send your deposit and pay as much as possible when you arrive at camp. The balance of your fee will be covered by our Campership Fund.`,
    },
    {
        title: "Location",
        body: `Day camp held at Hope Forest, 231 Highway 2 W, Towner. Hope Forest is located on the south side of Highway 2. It is between Granville and Towner. If you are doing drop-off and pick-up for your child, it is on the right side when you are coming from the west. Once you pass the Denbigh Forest sign, it is the next driveway on the right. Once you have pulled off the highway, stay on the driveway to the far left.`,
    },

    {
        title: "Bus Information",
        body: `Buses to and from Minot daily\nSpecific pickup times and locations will be provided upon registration.`,
    },
    {
        title: "Packing List",
        body: `We recommend packing a day bag with these items:\n• Swimsuit (must be modest—boys: trunk style; girls: one-piece.)\n• Towel\n• Sunscreen, bug repellent\n• Water bottle\n• Extra sweater or sweatshirt\n• Snackery spending money ($20 limit)\n\nDO NOT BRING\n• Electronics are not allowed (cell phones, smart watches, tablets, etc.). Any electronics brought to camp will be kept in a safe each day until the end of the day.\n• Please do not bring any valuables or weapons.`,
    },
    {
        title: "Health and Safety",
        body: `A medical professional is always on call, and hospitals are within a short drive.`,
    },
    {
        title: "Activities",
        body: `Theme days, swimming, canoeing, archery, campfires, BB guns, basketball, team games, spikeball, trying new skills, and many fun challenges`,
    },
    {
        title: "Contact Information",
        body: "Camp Directors:\nTodd and Kim Erickson\nPhone: 701-339-0525\nEmail: kim@hopeforestnd.com\n\nSend Mail to Camp:\nCamper's Name\nc/o Camp Hope\nPO Box 102\nDrake, ND 58036\n\nHope Forest Ministry Address:\nPO Box 3570\nMinot, ND 58702",
    },
    {
        title: "Forms",
        buttons: [
            {
                text: "Payment",
                link: "/camp/forms/payment"
            },
            {
                text: "Release Form",
                link: "/camp/forms/release"
            },
            {
                text: "Adventure Week Registration",
                link: "/camp/forms/register/adventure"
            }
        ],
    },
]

export default function Page() {
    return <ContentPage sections={sections} />
}