import '@/styles/globals.css';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Home | Awadhesh',
  description: 'Learn about awadhesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
