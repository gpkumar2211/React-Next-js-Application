import Footer from '@/Footer'
import Header from '@/Header'
import Menu from '@/Menu'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Menu />
        {children}
        <Footer />

      </body>
    </html>
  )
}
