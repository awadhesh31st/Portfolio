import '@/styles/globals.css';

export const metadata = {
  title: 'Home',
  description: 'Learn about awadhesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
