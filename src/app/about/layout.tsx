import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About YESP Studio | Engineering Bulletproof Business Logic',
    description: 'Learn about the philosophy and engineering standards behind YESP Studio. Architecting reliability for high-leverage service businesses.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
