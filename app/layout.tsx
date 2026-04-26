import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${roboto.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col lg:flex-row gap-5 p-5 lg:px-30 xl:px-70">
        <header>
          <Header />
        </header>
        <div className="flex-1 mb-10">{children}</div>
        <footer>
          <Footer />
        </footer>
        {/* Тостконтейнер использует <section>, которому я настроил глобальные стили, из-за чего его видно на экране. Проще всего убрать за экран */}
        <div className="absolute -left-100">
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            pauseOnHover
            theme="dark"
          />
        </div>
      </body>
    </html>
  );
}
