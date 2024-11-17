import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { NavMenu } from "@/components/navigation";
import { Aleo } from 'next/font/google';

const aleo = Aleo({
    subsets: ['latin'],
    variable: '--font-aleo',
    weight: ['400', '700'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${aleo.variable} antialiased min-h-screen`}>
                <NavMenu />

                {children}

                <Footer />
            </body>
        </html>
    );
}
