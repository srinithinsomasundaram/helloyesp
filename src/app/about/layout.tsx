import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Yesp Studio | Architects of Reliability',
    description: 'Yesp Studio was founded to solve the technical debt of manual operations. We build bulletproof automation systems that work quietly in the background.',
    keywords: 'business automation, AI automation agency, workflow optimization'
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
