import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: { template: "%s / The Wild Oasis", default: "Welcome/The Wild Oasis" },
  description: `Luxurious cabin hotel, located in the heart of the Italian Dolomites,
     surrounded by beautiful mountains and dark forests`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased flex flex-col min-h-screen bg-primary-950 text-primary-50`}
      >
        <Header />
        <div className="flex-1 px-8 py-5 grid">
          <main className="mx-auto max-w-7xl w-full">
            <ReservationProvider>
              <Toaster position="bottom-center" />
              {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
