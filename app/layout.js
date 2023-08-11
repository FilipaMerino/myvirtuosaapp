import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Virtuosa",
  description: "Online Business Management and Virtual Assistant services customized to meet your unique business needs. We help businesses grow sustainably through strategic business planning and Virtual Assistant support. Founded and led by an experienced Online Business Manager who has personally faced burnout, we understand the challenges businesses and individuals encounter. Our handpicked assistants prioritize your unique needs with a compassionate approach, ensuring you achieve success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
