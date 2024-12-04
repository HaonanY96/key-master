// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Key Master - Interactive Keyboard Shortcuts Learning Platform",
//   description: "Learn and master keyboard shortcuts efficiently",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "键盘快捷键可视化",
  description: "学习和掌握键盘快捷键",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
