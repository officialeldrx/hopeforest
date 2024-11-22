import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: 'Our Goal',
        image: '/images/share.jpg',
    },
    {
        title: 'Share Hope',
        body: 'We aim to equip people to share the hope of Christ with a world in need.  In January we will launch our Gap Year Internship program, with the purpose of training young people in servant ministry, Bible Study, and intentional relationship building. Partnering with multiple organizations locally and internationally allows us to provide students an educational experience that can help them better choose a path for their future, all while having them serve with us at Hope Forest to build our Camp Hope ministry.',
    },
    {
        title: 'Matthew 28:19',
        body: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
        image: '/images/header-three.png',
        verse: true,
    },
    {
        title: 'Our Vision',
        body: `To build and be a center of hope, welcoming all in the love of Christ, to show that Christ is the source of all true hope through the power of the Gospel. We strive to accomplish this through hospitality, intentional connections, providing care for the hurting, community gatherings, strategic instruction and application meetings, and outreach programs.`
    }
]

export default function Page() {
    return <ContentPage sections={sections} />
}