"use client"

import { useState, useEffect } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetOverlay } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

type NavItem = {
    title: string
    imageSrc: string
    href: string
    subItems?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
    {
        title: "About Us",
        imageSrc: "/icons/home.png",
        href: "/about",
    },
    {
        title: "Camp",
        imageSrc: "/icons/camp.png",
        href: "/camp/about",
        subItems: [
            { title: "About", href: "/camp/about" },
            { title: "Information", href: "/camp/info" },
            { title: "Payments", href: "/camp/payment" },
            { title: "Register", href: "/camp/register" },
            { title: "Release Form", href: "/camp/release" },
            { title: "Volunteer", href: "/camp/volunteer" },
        ],
    },
    {
        title: "Know",
        imageSrc: "/icons/know.png",
        href: "/know",
        subItems: [
            { title: "About", href: "/know" },
            { title: "Events", href: "/know/events" }
        ],
    },
    {
        title: "Renew",
        imageSrc: "/icons/renew.png",
        href: "/renew",
        subItems: [
            { title: "About", href: "/renew" },
            { title: "Reservations", href: "/renew/reservations" }
        ],
    },
    {
        title: "Share",
        imageSrc: "/icons/share.png",
        href: "/share",
    },
    {
        title: "Partner",
        imageSrc: "/icons/partner.png",
        href: "/partner",
    },
]

export function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [openSection, setOpenSection] = useState<string | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleSection = (title: string) => {
        setOpenSection((prev) => (prev === title ? null : title))
    }

    return (
        <div className="relative">
            {/* Top Navigation Bar */}
            <nav className="flex items-center p-2 bg-white shadow-md">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetOverlay className="bg-black/30" />
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="mr-4">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="left"
                        className={`w-[340px] transition-transform duration-500 ease-out ${mounted ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <SheetHeader className="sr-only">
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </SheetHeader>
                        <div className="py-4 h-full flex flex-col">
                            <a href="/">
                                <img src="/icons/logo.png" alt="Hope Forest" className="w-64 mx-auto mb-4" />
                            </a>
                            <nav className="space-y-2 overflow-y-auto flex-grow">
                                {navItems.map((item) => (
                                    <Collapsible
                                        key={item.title}
                                        open={openSection === item.title}
                                        onOpenChange={() => toggleSection(item.title)}
                                    >
                                        <div className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-primary/10 transition-all">
                                            <CollapsibleTrigger asChild>
                                                <a
                                                    href={item.subItems ? '' : item.href}
                                                    className="p-2 flex items-center gap-4 w-full"
                                                    onClick={(e) => {
                                                        item.subItems && e.preventDefault()
                                                        toggleSection(item.title)
                                                    }}
                                                >
                                                    <img src={item.imageSrc || "/placeholder.svg"} alt="" className="w-6 h-6" />
                                                    {item.title}
                                                    {item.subItems && (
                                                        <ChevronDown
                                                            className={`w-4 h-4 transition-transform duration-200 ${openSection === item.title ? "rotate-180" : ""
                                                                } ml-auto`}
                                                        />)}
                                                </a>
                                            </CollapsibleTrigger>
                                        </div>
                                        {item.subItems && (
                                            <CollapsibleContent className="pl-10 space-y-2 mt-2">
                                                {item.subItems.map((subItem) => (
                                                    <a
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className="block py-2 px-4 rounded-md hover:bg-primary/10 transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                ))}
                                            </CollapsibleContent>
                                        )}
                                    </Collapsible>
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
                <a href="/" className="mr-auto">
                    <img src="/icons/home.png" alt="Hope Forest" className="h-6" />
                </a>

                <a href="/partner">
                    <Button>Partner</Button>
                </a>
            </nav>
        </div>
    )
}

