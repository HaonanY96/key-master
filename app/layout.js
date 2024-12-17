import { Inter } from 'next/font/google'
import { AuthContextProvider } from "./_utils/auth-context"
import Navbar from "@/components/layout/navbar"
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://key-master-five.vercel.app/'),
  title: 'Key Master - Keyboard Shortcuts Assistant',
  description: 'Master keyboard shortcuts for various applications and boost your productivity',
  keywords: 'keyboard shortcuts, productivity, windows shortcuts, mac shortcuts',
  authors: [{ name: 'Key Master Team' }],
  openGraph: {
    title: 'Key Master - Keyboard Shortcuts Assistant',
    description: 'Master keyboard shortcuts for various applications and boost your productivity',
    url: 'https://key-master-five.vercel.app/',
    siteName: 'Key Master',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-page-bg">
        <AuthContextProvider>
          {/* 顶部导航栏 */}
          <Navbar />
          
          {/* 主要内容区域 */}
          <main className="flex-grow">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="bg-page-white py-8 mt-auto">
            <div className="container mx-auto px-4">
              <div className="text-center text-text-secondary">
                <p>© {new Date().getFullYear()} Key Master. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </AuthContextProvider>
      </body>
    </html>
  )
}
