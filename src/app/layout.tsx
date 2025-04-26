import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});
 
export const metadata: Metadata = {
  title: 'Nathan Oyewole | Creative Frontend Engineer',
  description: 'Creative Software Engineer with 2 years of experience, specializing in web development, app development. Building scalable products with great user experiences.',
  keywords: ['Software Engineer', 'Web Development', 'App Development', 'Frontend Developer', 'Nathan Oyewole'],
  authors: [{ name: 'Nathan Oyewole' }],
  creator: 'Nathan Oyewole',
  publisher: 'Nathan Oyewole',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robinsonhonour.me.',
    siteName: 'Nathan Oyewole Portfolio',
    title: 'Nathan Oyewole | Creative Frontend Engineer',
    description: 'Creative Frontend Engineer specializing in web development, app development. Building scalable products with great user experiences.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Nathan Oyewole - Creative Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathan Oyewole | Creative Frontend Engineer',
    description: 'Creative Frontend Engineer building scalable products with great user experiences.',
    creator: '@Gamerlaz0',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: '#6f1cd7',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nathan Emmanuel Oreofe Oyewole',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
