import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: 'Christmas At Hope Forest',
        image: '/images/cahf2.webp',
    },
    {
        title: "It's Christmas Time!",
        body: `Kick off Christmas with a FREE family event! Join us for a day of holiday cheer and fun for the whole family. (Weather permitting) Enjoy activities like sleigh rides, a bonfire with s'mores, ice skating (bring your own skates or use our limited available sizes), gingerbread house building, kids' Christmas storytime, and a photo booth. Sip on free coffee, cookies, and cocoa as you celebrate the season with us!`
    },
    {
        title: "Isaiah 9:6",
        body: `"For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."`,
        image: "/images/header-three.png",
        verse: true
    },
    {
        title: "Special Features",
        body: `Join us for Christmas carol singing and a short production happening at **5 PM** and again at **7 PM**. Don't miss this festive and heartwarming highlight of the event!`
    },
    {
        title: '',
        image: '/images/cahf3.webp',
    },
    {
        title: "Items for Purchase",
        body: `Support our ministry by purchasing delicious treats and handmade gifts.  
        • $5 Meal: Chili or a hotdog with chips.  
        • Christmas Shop: Christmas baked goods, sourdough, cookie dough, fresh and beautifully made Christmas wreaths from MN, Christmas canvases, and more!  

        All proceeds benefit our Camp Hope program, a ministry of Hope Forest.`
    },
    {
        title: "Bring the Family",
        body: `Invite your friends and family to this joyful celebration! Enjoy Christmas fun, pick up your holiday goodies, shop for gifts, and support a wonderful cause. We can’t wait to see you there!`
    }
];


export default function Page() {
    return <ContentPage sections={sections} />
}