import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: 'Our Vision',
        image: '/images/renew.jpg',
    },
    {
        title: 'Renew Hope',
        body: `We want Hope Forest to be a place where weary and discouraged people renew their hope in Christ. We plan to do this by creating a place where people can come to rest and connect with the Lord. We also specifically have a heart for families who have lost children. We would like to occasionally hold retreats to help them in their journey of grief along with reaching out to them and spending time with them personally We also have a partnership holding women's grief retreats.in Costa Rica.`,
    },
    {
        title: '1 Peter 2:24',
        body: 'He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By His wounds you have been healed.',
        image: '/images/header-two.png',
        verse: true,
    },
    {
        title: `Hope's New Home`,
        body: 'We also have a special place in our hearts for families who have suffered the loss of a child. We understand the difficulties they face and would like to offer occasional retreats to support them on their journey of grief. At Hope Forest we believe that no one should have to face their struggles alone, and we want to be a source of comfort and hope for those who need it most.',
    },
]

export default function Page() {
    return <ContentPage sections={sections} />
}