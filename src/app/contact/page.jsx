import styles from './contact.module.css'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill={true}
          src='/pic/water.jpg'
          alt='水'
        />
      </div>
      <div className={styles.info}>
        <p className={styles.left}>
          專業化的服務推動環保事業，改善地球大氣環境，提供
          人類清新的空氣品質。喬豐盡綿薄之力，期待留給子孫
          後代一個舒適、乾淨的生活空間，為保護地球上生存環 境做出更大的貢獻。
        </p>
        <div className='right'>
          <h1 className={styles.title}>喬豐國際科技股份有限公司</h1>
          <h3 className={styles.subTitle}>業務經理:羅文業</h3>
          <h3 className={styles.subTitle}>聯繫方式:0922-213-695</h3>
          <h3 className={styles.subTitle}>信箱:a05160516@yahoo.com.tw</h3>
          <h3 className={styles.subTitle}>
            地址:112台北市北投區中央北路二段265號1樓
          </h3>
          <h3 className={styles.subTitle}>公司電話:02-2656-1234</h3>
        </div>
      </div>
    </div>
  )
}
export default Contact
