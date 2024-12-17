import { Inter } from 'next/font/google';
import { AuthContextProvider } from "@/app/_utils/auth-context";
import AppContent from "@/components/layout/app-content";
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-page-bg">
        <AuthContextProvider>
          <AppContent>{children}</AppContent>
        </AuthContextProvider>
      </body>
    </html>
  );
} 