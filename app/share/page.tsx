import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: 'Our Goal',
        image: '/images/share.jpg',
    },
    {
        title: 'Share Hope',
        body: 'We aim to empower individuals to spread the hope of the Gospel to a world in need. To achieve this, we are partnering with an organization called Next Generation Impact, based in Atlanta. Together, we will train people to conduct outreach camps like the ones we organize.',
    },
    {
        title: 'Matthew 28:19',
        body: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
        image: '/images/header-three.png',
        verse: true,
    },
    {
        title: 'The Power Of Hope',
        body: 'In addition to this, we aim to establish a year-long discipleship program for gap-year students, as well as a summer-long version for high school students. Our focus will be on teaching them what it truly means to be followers of Jesus and part of the Church. \n\nWe will encourage them to study the Word, learn how to pray, serve others, and love their neighbors. Most importantly, we will teach them how to share the hope of the Gospel with others. At our program, they will find a supportive and nurturing community that will help them grow in their faith and develop valuable skills for life.',
    },
]

export default function Page() {
    return <ContentPage sections={sections} />
}