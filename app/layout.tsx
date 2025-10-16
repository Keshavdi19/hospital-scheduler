import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hospital Appointment Scheduler",
  description: "Frontend interview challenge - Doctor appointment scheduling system",
  icons: {
    icon: "/favicon.ico", // You can change if you have logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        {/* ✅ Future Navbar Placeholder */}
        {/* <Navbar /> */}

        <main className="min-h-screen">{children}</main>

        {/* ✅ Future Footer Placeholder */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
