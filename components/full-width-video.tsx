'use client'

import React from 'react'
import Image from 'next/image'

export function FullWidthVideoComponent({
    src,
    minHeight = '300px'
}: {
    src: string
    minHeight?: string
}) {
    return (
        <div className="relative w-full" style={{ minHeight }}>
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4" style={{ minHeight }}>
                <Image
                    src="/icons/logo_white.png"
                    alt="Overlay image"
                    width={600}
                    height={20}
                    className="pointer-events-none"
                />
            </div>
        </div>
    )
}