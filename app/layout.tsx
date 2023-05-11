import '@/styles/globals.css';
import Head from 'next/head';

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
      <body>{children}</body>
    </html>
  );
}
