
import Header from "@/components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

export const metadata = {
  title: "🥬 FreshBasket | Home",
  description: "FreshBasket – Your one-stop online grocery store for fresh vegetables, fruits, dairy, and daily essentials delivered to your doorstep.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
