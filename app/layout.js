import { AuthContextProvider } from "./_utils/auth-context";

export const metadata = {
  title: 'Key Master - Keyboard Shortcuts Assistant',
  description: 'A tool to help you learn and memorize keyboard shortcuts for various applications',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
