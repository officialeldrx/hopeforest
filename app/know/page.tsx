import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: 'Our Mission',
        image: '/images/know.jpg',
    },
    {
        title: 'Know Hope',
        body: 'We will spread the message of hope that can be found in Jesus Christ and enstil this hope in others. To achieve this, we are organizing outreach camps for children, just like we have been doing for the past 20 years.'
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