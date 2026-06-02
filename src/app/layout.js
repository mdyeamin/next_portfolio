import "./globals.css";
import Background from "@/components/Background";
import SideBar from "@/components/SideBar";
import MobileNav from "@/components/MobileNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Bin Yeamin | Frontend Architect & MERN Developer",
  description: "Portfolio of Bin Yeamin, a passionate Full Stack Web Developer specializing in the MERN Stack, React, Next.js, and modern UI design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Anti-flash inline script to apply saved theme instantly before browser paints */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = storedTheme || systemTheme || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body 
        className="antialiased bg-background text-foreground min-h-screen selection:bg-primary/30 transition-colors duration-500"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Animated Background Gradients */}
          <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none -z-10 transition-colors duration-500" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] pointer-events-none -z-10 transition-colors duration-500" />
          
          <Background />
          <ThemeToggle />
          <SideBar />
          <MobileNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
