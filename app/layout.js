import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medimeet - doctor's appointment app",
  description: "connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
    appearance={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}
          <Header/>
          <main className="min-h-screen">{children}</main>

          {/* footer */}
          <Footer/>
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto text-center text-gray-200 px-4">
              <p> Made wiwth 💗 by Noor&Ashish</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
