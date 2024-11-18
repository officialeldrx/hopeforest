'use client'

import { useState, useEffect } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetOverlay,
} from '@/components/ui/sheet'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'

type NavItem = {
    title: string
    imageSrc: string
    href: string
    subItems?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
    {
        title: 'About',
        imageSrc: '/icons/home.png',
        href: '/about',
    },
    {
        title: 'Know',
        imageSrc: '/icons/know.png',
        href: '/know',
        subItems: [
            { title: 'Camp', href: '/know/camp' },
            { title: 'Events', href: '/know/events' },
        ]
    },
    {
        title: 'Renew',
        imageSrc: '/icons/renew.png',
        href: '/renew',
        subItems: [
            { title: 'Reservations', href: '/renew/reservations' },
        ]
    },
    {
        title: 'Share',
        imageSrc: '/icons/share.png',
        href: '/share',
    },
    {
        title: 'Partner',
        imageSrc: '/icons/partner.png',
        href: '/partner',
    },
]

export function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [openSections, setOpenSections] = useState<string[]>([])

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleSection = (title: string) => {
        setOpenSections(prev =>
            prev.includes(title)
                ? prev.filter(item => item !== title)
                : [...prev, title]
        )
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
                        className={`w-[340px] transition-transform duration-500 ease-out ${mounted ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        <SheetHeader className="sr-only">
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </SheetHeader>
                        <div className="py-4">
                            <a href="/">
                                <img
                                    src="/icons/logo.png"
                                    alt="Hope Forest"
                                    className="w-64 mx-auto mb-4"
                                />
                            </a>
                            <nav className="space-y-2 overflow-auto max-h-full">
                                {navItems.map((item, index) => (
                                    <Collapsible
                                        key={item.title}
                                        open={openSections.includes(item.title)}
                                        onOpenChange={() => toggleSection(item.title)}
                                    >
                                        <div className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-primary/10 transition-all">
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-4 w-full"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <img src={item.imageSrc} alt="" className="w-6 h-6" />
                                                <span className="text-lg">{item.title}</span>
                                            </a>
                                            {item.subItems && (
                                                <button
                                                    className="p-2"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        toggleSection(item.title)
                                                    }}
                                                >
                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform duration-200 ${openSections.includes(item.title) ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                            )}
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

                <a href="/partner"><Button>Partner</Button></a>
            </nav>
        </div>
    )
}
