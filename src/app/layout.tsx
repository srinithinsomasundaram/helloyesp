import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://yespstudio.com'),
    title: "Yesp Studio | AI Automation for Businesses",
    description: "Yesp Studio helps service businesses automate lead handling, follow-ups, and workflows with bulletproof AI automation systems.",
    keywords: "srinithin somasundaram, srinithin, yesp founder, yesp, yesp studio, yesp corporation, yesp tech, yesp it company, yesp ai, ai agency, ai agency in india, ai agency in erode, ai agency in coimbatore, AI agents for business, Custom AI workflows, AI automation services, End-to-end AI solutions, AI integration & deployment, AI-driven process optimization",
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Yesp Studio | AI Automation for Businesses",
        description: "Bulletproof AI automation systems for service businesses and agencies",
        url: 'https://yespstudio.com',
        siteName: 'Yesp Studio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Yesp Studio | AI Automation for Businesses",
        description: "Bulletproof AI automation systems for service businesses and agencies",
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Yesp Studio",
                            "alternateName": "Yesp Corporation",
                            "url": "https://yespstudio.com",
                            "logo": "https://yespstudio.com/logo.png",
                            "description": "AI automation agency specializing in business process automation and custom workflow solutions.",
                            "founder": {
                                "@type": "Person",
                                "name": "Srinithin Somasundaram"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/yesptech/",
                                "https://www.instagram.com/yespstudio"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "hello@yespstudio.com",
                                "contactType": "Customer Service"
                            }
                        })
                    }}
                />
                <Navbar />
                <main className="pt-24 min-h-screen">
                    {children}
                </main>
                <WhatsAppButton />
                <CookieConsent />
                <Footer />
            </body>
        </html>
    );
}
