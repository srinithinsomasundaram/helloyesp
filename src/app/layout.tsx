import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Yesp Studio | Custom Automation for Service Businesses & Agencies",
    description: "Yesp Studio helps service businesses automate lead handling, follow-ups, and internal workflows — so nothing slips through the cracks.",
    keywords: "srinithin somasundaram, srinithin, yesp founder, yesp, yesp studio, yesp corporation, yesp tech, yesp it company, yesp ai, ai agency, ai agency in india, ai agency in erode, ai agency in coimbatore, AI agents for business, Custom AI workflows, AI automation services, End-to-end AI solutions, AI integration & deployment, AI-driven process optimization",
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
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
