import { Metadata } from 'next';
import GermanyClient from './GermanyClient';

export const metadata: Metadata = {
    title: 'AI Automation Agency Germany | Industrial AI Solutions | Yesp Studio',
    description: 'Premier AI automation agency in Germany. We specialize in GDPR-compliant AI services, business process automation, and custom software development for SMEs and manufacturing.',
    keywords: 'AI automation agency Germany, Industrial AI solutions, Business process automation Germany, AI software development Germany, Intelligent process automation, Secure AI solutions Germany, GDPR compliant AI services, Enterprise AI automation, AI for SMEs Germany, AI solutions for manufacturing, AI workflow optimization'
};

export default function GermanyLocation() {
    return <GermanyClient />;
}
