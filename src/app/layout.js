import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "@/context/ThemeContext";
import MainHeader from "@/components/MainHeader";
import EmailSub from "@/components/EmailSub";
import MainFooter from "@/components/MainFooter";
import ThemeModeToggler from "@/components/ThemeModeToggler";

export const metadata = {
  title: "Sphenews",
  description: "The go-to platform for budding authors",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative bg-slate-50 dark:bg-main-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <MainHeader/>
          <main>
            {children}
          </main>
          <EmailSub/>
          <MainFooter/>
          <ThemeModeToggler/>
        </ThemeProvider>
        </body>
    </html>
  )
}
