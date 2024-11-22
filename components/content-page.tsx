"use client";

import { usePathname } from "next/navigation";
import ContentSection, { section } from "@/components/ui/content-section";

export default function ContentPage({ sections }: { sections: section[] }) {
    const pathname = usePathname();
    const currentPath = pathname.split('/')[1];

    return (
        <div className="flex flex-col gap-16 pt-10 pb-8">
            {sections.map((section, index) => (
                <ContentSection key={index} section={section} />
            ))}
        </div>
    )
}