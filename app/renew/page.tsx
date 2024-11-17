import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: 'Our Vision',
        image: '/images/renew.jpg',
    },
    {
        title: 'Renew Hope',
        body: 'We want Hope Forest to be a sanctuary where those who feel weary and discouraged can find renewed hope in Jesus Christ. Our goal is to create a peaceful retreat where people can come to rest and connect with God in a serene environment.',
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