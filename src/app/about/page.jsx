import styles from './page.module.css'
import Image from 'next/image'
const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          width={500}
          height={350}
          src='/pic/image-002.jpg'
          className={styles.img}
        />
      </div>
      <div className={styles.item}>
        <h1>關於喬豐</h1>
        <p className={styles.description}>
          喬豐為台灣專業觸媒技術人員組成，致力於空氣環保
          之開發製造商，以專業化的服務推動環保事業，並與
          國外技術接軌共同合作開發，使得柴油發電機黑煙淨
          化設備於實用化上相當成功，且相關技術日益成熟。
          <br />
          對於改善地球大氣環境，提供人類清新的空氣品質略
          盡綿薄之力，以期待留給後代子孫一個舒適、乾淨的
          生活空間，為保護地球生存環境做出更大的貢獻。
        </p>
      </div>
    </div>
  )
}
export default about
