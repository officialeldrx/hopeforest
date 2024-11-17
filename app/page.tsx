import { FullWidthVideoComponent } from "@/components/full-width-video"
import ContentSection from "@/components/ui/content-section"
import Image from "next/image"

const imageArray = [
    { image: '/images/family.jpg', icon: '/icons/know_white.png', label: 'know' },
    { image: '/images/leaves.jpg', icon: '/icons/renew_white.png', label: 'renew' },
    { image: '/images/house.jpg', icon: '/icons/share_white.png', label: 'share' },
]

export default function Page() {
    return (
        <div className="w-full flex flex-col gap-16 pb-8">
            <FullWidthVideoComponent src="videos/forest.mp4" minHeight="500px" />

            <ContentSection title="What Is Hope Forest?" body="Hope Forest is a place to grow hope in Christ.  We share the hope of Christ in outreach camps and events, help people renew hope in Christ when they are hurting, and encourage people to share the hope of Christ by equipping them through outreach program training." />

            <div className="flex flex-col gap-4">
                <ContentSection title="What We Do" />
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