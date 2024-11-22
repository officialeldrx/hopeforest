import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: 'Our Mission',
        image: '/images/know.jpg',
    },
    {
        title: 'Know Hope',
        body: 'We want to help others know the hope they can have in Jesus Christ. One way we intend to do this is to hold outreach camps for children (like we have done for the last 20 years) where we will share the hope of the Gospel. Specifically, we have a heart for underprivileged children who cannot normally afford camps. We held our first session at Camp Bentley July of 2024.'
    },
    {
        title: 'Jeremiah 29:11',
        body: 'For I know the plans I have for you. declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
        image: '/images/header-one.png',
        verse: true
    },
    {
        title: 'A Legacy Of Hope',
        body: 'Our goal is to reach out to underprivileged children who would not typically have the opportunity to attend such camps. We believe that every child deserves to experience the joy and hope that comes from learning about the Gospel.'
    },
]

export default function Page() {
    return <ContentPage sections={sections} />
}