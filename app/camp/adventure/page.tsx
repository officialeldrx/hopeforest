import ContentPage from "@/components/content-page"
import type { section } from "@/components/ui/content-section"

const sections: section[] = [
    {
        title: "Adventure Week",
        image: "/images/tugofwar.jpg",
    },
    {
        title: "Time",
        body: `June 21st-25th\n\n2pm-7pm Sunday\n9am-4pm Mon-Thurs\n\nCheck-in: Sunday, 1:30pm`,
    },
    {
        title: "Ages",
        body: `Grades 6-8`,
    },
    {
        title: "Cost",
        body: `$100 (includes a camp t-shirt)\n\nIf you are in need of sponsorship, please send your deposit and pay as much as possible when you arrive at camp. The balance of your fee will be covered by our Campership Fund.`,
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
        body: `We recommend packing a day bag with these items:\n• Swimsuit (must be modest—boys: trunk style; girls: one-piece.)\n• Towel\n• Sunscreen, bug repellent\n• Water bottle\n• Extra sweater or sweatshirt\n• Snackery spending money ($20 limit)\n\n*DO NOT BRING*\n• Electronics are not allowed (cell phones, smart watches, tablets, etc.). Any electronics brought to camp will be kept in a safe each day until the end of the day.\n• Please do not bring any valuables or weapons.`,
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
        title: "Register",
        body: 'Registration is now open! To register, click the Register button. Fill out the form and submit a non-refundable $25 deposit through our secure online payment portal.',
        button: 'Register Now',
        link: '/camp/forms/register/adventure',
    },
    {
        title: "",
        body: "Camp Directors:\nTodd and Kim Erickson\nPhone: 701-339-0525\nEmail: kim@hopeforestnd.com",
    }
]

export default function Page() {
    return <ContentPage sections={sections} />
}