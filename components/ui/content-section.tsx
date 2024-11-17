import Image from "next/image"

interface section {
    title: string,
    image?: string,
    body?: string,
    verse?: boolean
}

export default function ContentSection({ title, body, image, verse }: { title: string, body?: string, image?: string, verse?: boolean }) {
    return (
        <div className="flex flex-col gap-2 max-w-[880px] mx-auto px-4 w-full">
            {verse ? (
                <div className="p-8 flex flex-col gap-2 bg-cover bg-center text-white text-xl font-bold rounded-xl" style={{ backgroundImage: `url(${image})` }}>
                    <span>{body}</span>
                    <i>- {title}</i>
                </div>
            ) : (
                <>
                    <h1 className={`text-4xl ${body || image ? '' : 'text-center'}`}>{title}</h1>

                    {body && <span className="text-lg whitespace-pre-line">{body}</span>}

                    {image && <Image src={image} alt='' width={1000} height={1000} />}
                </>
            )
            }
        </div >
    )
}

export type {
    section
}