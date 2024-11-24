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
            <head>
                <title>Hope Forest</title>
                <meta
                    name="description"
                    content="Hope Forest, led by Todd and Kim Erickson, offers over 20 years of expertise in evangelism, discipleship, and ministry leadership. Rooted in the hope of Christ, we focus on outreach camps, grief support, and leadership training to help individuals know, renew, and share."
                />
                <meta name="keywords" content="Hope Forest, Christian outreach, evangelism, discipleship, ministry leadership, grief support, Bible-based teaching, Christian camps, renewing hope, sharing Christ" />
                <meta name="author" content="Hope Forest Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph Metadata */}
                <meta property="og:title" content="Hope Forest - Knowing, Renewing, Sharing" />
                <meta
                    property="og:description"
                    content="Discover Hope Forest's mission to help people know, renew, and share in Christ through outreach camps, grief support, and leadership training."
                />
                <meta property="og:url" content="https://www.hopeforestnd.com" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.hopeforestnd.com/images/share.png" />

                {/* Twitter Metadata */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hope Forest - Knowing, Renewing, Sharing" />
                <meta
                    name="twitter:description"
                    content="Join Hope Forest in its mission to share Christ's hope through evangelism, grief support, and outreach training."
                />
                <meta name="twitter:image" content="https://www.hopeforestnd.com/images/share.png" />
            </head>
            <body className={`${aleo.variable} antialiased min-h-screen`}>
                <NavMenu />

                {children}

                <Footer />
            </body>
        </html>
    );
}
