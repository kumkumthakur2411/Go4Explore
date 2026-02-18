import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Go4Explore",
  description: "Travel with Go4Explore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={`overflow-x-hidden flex flex-col`}>
        {/* Top navigation (fixed) */}
        <NavBar />

        {/* Main Content - add top padding equal to nav height (h-16) */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        {/* Footer (stays at bottom) */}
        <Footer />
      </body>
    </html>
  );
}
