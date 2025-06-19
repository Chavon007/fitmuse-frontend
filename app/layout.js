import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import CartProvider from "@/context/cartContext";
import AuthProvider from "@/context/authcontext";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "fitmuse",
  description: "FitMuse: Where fitness meets fashion.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <div className="container">
              <Header />
              <Toaster position="top-right" />
              {children}
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
