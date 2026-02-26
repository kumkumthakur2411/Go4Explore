import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import MobileFixFooter from "./components/MobileFixFooter";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`overflow-x-hidden flex flex-col justify-center `}>

        {/* Top navigation (fixed) */}
        <NavBar className=""/>
        {/* Main Content - add top padding equal to nav height (h-16) */}
        <main className="flex-1  ">
          {children}
        </main>
        {/* Footer (stays at bottom) */}
        <Footer />
        <MobileFixFooter />

      </body>
    </html>
  );
}
