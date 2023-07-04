import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'

const links = [
  { id: 1, title: '首頁', url: '/' },
  { id: 2, title: '關於喬豐', url: '/about' },
  { id: 3, title: '產品資訊', url: '/products' },
  { id: 4, title: '與我聯繫', url: '/contact' },
]
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src='/pic/logo.png'
            width={60}
            height={60}
            alt='喬豐國際科技股份有限公司'
          />
          <div className={styles.logoText}>
            <h2>喬豐國際科技股份有限公司</h2>
            <p>Ciao Feng International Technology Co., Ltd</p>
          </div>
        </div>
      </Link>
      <div className={styles.links}>
        {links.map((link) => {
          const { id, title, url } = link
          return (
            <Link key={id} href={url} className={styles.link}>
              {title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Navbar
