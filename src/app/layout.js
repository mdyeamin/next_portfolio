import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import SideBar from "@/components/SideBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Yeamin | Frontend Architect & MERN Developer",
  description: "Portfolio of Md Yeamin, a passionate Full Stack Web Developer specializing in the MERN Stack, React, Next.js, and modern UI design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-background text-foreground min-h-screen selection:bg-primary/30`}>
        {/* Animated Background Gradients */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] pointer-events-none -z-10" />
        
        <Background />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
