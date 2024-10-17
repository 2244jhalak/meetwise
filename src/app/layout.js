import localFont from "next/font/local";
import "./globals.css";


import AuthProvider from "./services/AuthProvider";
import { LanguageProvider } from "./components/context/LanguageContext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Meetwise",
  description: "Create your schedule",
  icons: {
    icon: '/logo.png',  // Add your favicon path here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
        <AuthProvider>
        
        {children}
        
        </AuthProvider>
        </LanguageProvider>
        
        
      </body>
    </html>
  );
}
