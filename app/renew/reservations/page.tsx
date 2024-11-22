import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: "Cabin Reservations",
        body: `Our newly renovated cabin at Hope Forest will be available for reservations starting in winter 2025. If you're seeking a peaceful getaway to rest and renew your hope, we would love to host you. Please contact us via email at kim@hopeforestnd.com to inquire about availability or make a reservation.`
    },
    {
        title: "About the Cabin",
        body: `The cabin is situated on two beautiful acres adjacent to our personal property. The cabin has been remodeled into a two-bedroom, year-round livable home with a garage. Our vision is to provide this space for missionaries, pastors, couples grieving the loss of children, or anyone in need of rest and renewal.`
    },
    {
        title: "Isaiah 40:31",
        body: `"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."`,
        image: "/images/header-two.png",
        verse: true
    }
];


export default function Page() {
    return <ContentPage sections={sections} />
}