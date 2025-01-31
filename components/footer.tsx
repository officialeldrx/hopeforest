'use client'

import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full py-6 px-4">
            <div className="container mx-auto flex flex-col items-center gap-6">
                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-8">
                    <Link
                        href="https://www.facebook.com/people/Hope-Forest/61557434365856/?_rdr"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook className="h-8 w-8" />
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-8 w-8" />
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="YouTube"
                    >
                        <Youtube className="h-8 w-8" />
                    </Link>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <Button
                        variant="link"
                        className="text-primary"
                        onClick={() => window.location.href = 'tel:+17013390525'}
                    >
                        <Phone className="mr-2 h-4 w-4" />
                        +1(701) 339-0525
                    </Button>
                    <span className="hidden md:inline text-gray-400">|</span>
                    <Button
                        variant="link"
                        className="text-primary"
                    >
                        <MapPin className="mr-2 h-4 w-4" />
                        PO Box 3570 Minot, ND 58702
                    </Button>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-600">
                    © {currentYear} Hope Forest
                </div>
            </div>
        </footer>
    )
}