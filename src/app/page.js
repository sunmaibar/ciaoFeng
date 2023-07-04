import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            煙霧散去，能源閃耀！
            <br />
            揚帆綠能，專業引領！
          </h1>
          <h3 className={styles.description}>
            我們引領綠色能源新潮流，為您的大樓注入強大的發電動力！讓我們為您介紹最先進的大樓發電機排煙系統，為您的建築物提供可靠、高效、環保的能源解決方案。
          </h3>
        </div>
        <div className={styles.imagediv}>
          <div className={styles.imageContainer}>
            <Image fill={true} className={styles.image} src='/pic/homebs.jpg' />
          </div>
        </div>
      </div>
      <h1 className={styles.title2}>柴油發電機黑煙淨化設備</h1>
      <div className={styles.secondContainer}>
        <div className={styles.info}>
          <h3 className={styles.subTitle}>柴油發電機的污染主要來自三個方面</h3>
          <ul>
            <li>微粒黑煙(顆粒物)排 放物質</li>
            <li>氮氧化物(NO2)</li>
            <li>硫氧化物(SOX)</li>
          </ul>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image2}
              src='/pic/image-030.jpg'
              fill={true}
            />
          </div>
        </div>
        <p className={styles.description2}>
          其中微粒黑煙 排放物質大部分是由碳或碳化 物的微小顆粒所組成的。當然
          也含有很多的懸浮粒子，嚴重 影響人類的健康。
          <br />
          黑煙是在燃 燒過程中所產生的固體、液體 或氣體的微粒懸浮物。針對有
          害氣體粒狀汙染物黑煙(PM或 稱PARTICULATE)治理其原理
          為:黑煙過濾淨化器、黑煙觸 媒過濾淨化器、亦可加裝設備
          為雙效型黑煙過濾淨化器以及 自動再生行黑煙過濾淨化器，
          皆為安裝在柴油引擎發電機排 放系統中的陶瓷過濾器，可以
          捕捉有害微粒排放物質。
        </p>
      </div>
    </>
  )
}
