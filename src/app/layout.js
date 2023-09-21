import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from '@/components/Navbar'
import EmailSub from '@/components/EmailSub'
import MainFooter from '@/components/MainFooter'
import ThemeModeToggler from '@/components/ThemeModeToggler'
import { ThemeContextProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'Sphenews',
  description: 'The author\'s nest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <ThemeContextProvider>
          <Navbar/>
          <main>
            {children}
          </main>
          <EmailSub/>
          <MainFooter/>
          <ThemeModeToggler/>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
