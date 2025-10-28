import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "./globals.css";

import { Analytics } from "@vercel/analytics/next";


const poppins = Poppins({

  variable: "--font-poppins",
  subsets: ["latin"],

  weight: ["400", "500", "600", "700", "800", "900"],

});



export const metadata: Metadata = {

  title: 'Nathan Oyewole | Creative Frontend Engineer',

  description:

    'Creative Software Engineer with 2 years of experience, specializing in web development and app development. Building scalable products with great user experiences.',

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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {

    type: 'website',

    locale: 'en_US',

    url: 'https://nathanoyewole.me',
    siteName: 'Nathan Oyewole Portfolio',

    title: 'Nathan Oyewole | Creative Frontend Engineer',

    description: 'Creative Frontend Engineer specializing in web and app development. Building scalable products with great user experiences.',

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

    creator: '@NathanOyewole',

    images: ['/favicon.ico'],

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

    google: '',
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

      <body className={`${poppins.variable} antialiased`}>

        {children}

        <Analytics />
      </body>

    </html>

  );

}

