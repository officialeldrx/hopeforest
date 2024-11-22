import Image from "next/image"
import { Button } from "./button"

interface section {
    title: string,
    image?: string,
    body?: string,
    verse?: boolean,
    link?: string,
    button?: string,
}

export default function ContentSection({ section }: { section: section }) {
    return (
        <div className="flex flex-col gap-2 max-w-[880px] mx-auto px-4 w-full">
            {section.verse ? (
                <div className="p-8 flex flex-col gap-2 bg-cover bg-center text-white text-xl font-bold rounded-xl" style={{ backgroundImage: `url(${section.image})` }}>
                    <span>{section.body}</span>
                    <i>- {section.title}</i>
                </div>
            ) : (
                <>
                    <div className="h-full flex justify-between">
                        <h1 className={`text-4xl ${section.body || section.image ? '' : 'text-center'}`}>{section.title}</h1>
                        {(section.link && section.button) && <a href={section.link}><Button>{section.button}</Button></a>}
                    </div>

                    {section.body && <span className="text-lg whitespace-pre-line">{section.body}</span>}

                    {section.image && <Image src={section.image} alt='' width={1000} height={1000} />}

                </>
            )
            }
        </div >
    )
}

export type {
    section
}