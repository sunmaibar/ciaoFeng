import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '喬豐國際科技股份有限公司',
  description:
    '專業化的服務推動環保事業，改善地球大氣環境，提供 人類清新的空氣品質。喬豐盡綿薄之力，期待留給子孫 後代一個舒適、乾淨的生活空間，為保護地球上生存環 境做出更大的貢獻。',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
