import ContentPage from "@/components/content-page";
import { section } from "@/components/ui/content-section";

const sections: section[] = [
    {
        title: "About Us",
        image: "/images/ericksons.png"
    },
    {
        title: "Directors",
        body: "Todd and Kim Erickson have over 20 years of experience in evangelism, discipleship, and leadership training along with directing children and youth ministry. For the past 19 years, they have also been coming alongside grieving families who've lost children. They have six children - five on earth and one in heaven. Their children range in age from 21 to 15."
    },
    {
        title: "Board",
        body: "Dave Sulack, Knoxville, TN; Rachel Lindquist, Minot, ND; Patsy Muri, Watford City, ND; Norval Semchanko, Max, ND; Jenae Stein, Bismarck, ND; Christian Eby, Minot, ND; Matt Berube, Glendale, AZ."
    },
    {
        title: "We believe:",
        body: `• The Bible to be the inspired, the only infallible, authoritative Word of God.
    • That there is one God, eternally existent in three persons: Father, Son and Holy Spirit.
    • In the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory.
    • That for the salvation of lost and sinful people, regeneration by the Holy Spirit is absolutely essential.
    • In the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life.
    • In the resurrection of both the saved and the lost; they that are saved unto the resurrection of life and they that are lost unto the resurrection of damnation.
    • In the spiritual unity of believers in our Lord Jesus Christ. (As adopted by the National Association of Evangelicals)`
    },
    {
        title: "Location",
        body: "Hope Forest is located along Highway 2 up against the beautiful Denbigh Forest about 30 min east of Minot, ND. 231 Highway 2 W, Towner, ND 58788."
    },
    {
        title: "Contact us",
        body: "Mailing address: PO Box 3570 Minot, ND 58702\nPhone: 701-339-8417\nTodd: todd@hopeforestnd.com\nKim: kim@hopeforestnd.com"
    }
];

export default function Page() {
    return <ContentPage sections={sections} />
}