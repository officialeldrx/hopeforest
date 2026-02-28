import Image from "next/image"
import { Button } from "./button"

interface section {
    title: string,
    image?: string,
    body?: string,
    verse?: boolean,
    link?: string,
    button?: string,
    buttons?: {
        text: string,
        link: string
    }[]
}

export default function ContentSection({ section }: { section: section }) {
    return (
        <div className="flex flex-col gap-2 max-w-[880px] mx-auto px-4 w-full">
            {section.verse ? (
                <div className="p-8 flex flex-col gap-2 bg-cover bg-center text-white text-xl font-bold rounded-xl bg-primary" >
                    <span>{section.body}</span>
                    <i>- {section.title}</i>
                </div>
            ) : (
                <>
                    <div className="h-full flex justify-between flex-col md:flex-row gap-2">
                        <h1 className={`text-4xl ${section.body || section.image ? '' : ''}`}>{section.title}</h1>
                        {(section.link && section.button) && <a href={section.link}><Button>{section.button}</Button></a>}
                        {section.buttons && <div className="flex flex-wrap gap-2 ">{section.buttons.map((button, index) => <a key={index} href={button.link}><Button>{button.text}</Button></a>)}</div>}
                    </div>

                    {section.image && <Image src={section.image} alt='' width={1000} height={1000} />}

                    {section.body && <span className="text-lg whitespace-pre-line">{section.body}</span>}
                </>
            )
            }
        </div >
    )
}

export type {
    section
}