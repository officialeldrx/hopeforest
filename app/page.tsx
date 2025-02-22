import { FullWidthVideoComponent } from "@/components/full-width-video"
import ContentSection, { section } from "@/components/ui/content-section"
import Image from "next/image"

const imageArray = [
    { image: '/images/family.webp', icon: '/icons/know_white.png', label: 'know' },
    { image: '/images/leaves.webp', icon: '/icons/renew_white.png', label: 'renew' },
    { image: '/images/house.webp', icon: '/icons/share_white.png', label: 'share' },
]

const sections: section[] = [
    {
        title: "What Is Hope Forest?",
        body: "Hope Forest is a place to grow hope in Christ.  We share the hope of Christ in outreach camps and events, help people renew hope in Christ when they are hurting, and encourage people to share the hope of Christ by equipping them through outreach program training."
    },
    {
        title: "What We Do"
    }
]

export default function Page() {
    return (
        <div className="w-full flex flex-col gap-16 pb-8">
            <FullWidthVideoComponent src="https://res.cloudinary.com/dhjk6lir2/video/upload/v1732456786/forest_nb6hkt.mp4" minHeight="500px" />

            <ContentSection section={sections[0]} />

            <div className="flex flex-col gap-4">
                <ContentSection section={sections[1]} />
                <div className="w-full flex lg:flex-row flex-col">
                    {imageArray.map((image, index) => (
                        <a key={index} href={`/${image.label}`} className="h-96 flex flex-grow flex-col gap-2 bg-cover bg-center items-center justify-center" style={{ backgroundImage: `url(${image.image})` }}>
                            <Image src={image.icon} alt={`${image.icon} icon`} width={80} height={80} className="drop-shadow-lg" />
                            <h1 className="text-4xl text-white drop-shadow-lg">{image.label.toUpperCase()}</h1>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}