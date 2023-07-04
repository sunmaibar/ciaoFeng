import styles from './productDetail.css'
const ProductDetail = () => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.two}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            雙效型黑煙過濾淨化器設備組成 原件與配件
          </h1>
          <ul className={styles.lists}>
            <li>前段觸媒轉化器</li>
            <li>後段黑煙過濾淨化器</li>
            <li>防震耐熱墊片</li>
            <li>淨化器前端與後端引導錐子</li>
            <li>排氣旁通切換閥</li>
            <li>黑煙壓力、溫度感測器</li>
            <li>控制箱、空壓機附屬配備</li>
          </ul>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>
            自動再生型黑煙過濾淨化器設備組成原件與配件
          </h1>
          <ul className={styles.lists}>
            <li>黑煙過濾淨化器</li>
            <li>加熱器</li>
            <li>防震耐熱墊片</li>
            <li>淨化器前端與後端引導錐子</li>
            <li>排氣旁通切換閥</li>
            <li>黑煙壓力、溫度感測器</li>
            <li>控制箱、空壓機附屬配備</li>
          </ul>
        </div>
      </div>
      <p className={styles.desc}>
        黑煙過濾淨化器能符合最新排放標準依據國內固定汙染源空氣汙
        染物排放標準第1020032301號附表一「固定汙染源空氣汙染物排
        放標準」及電力設施空氣汙染物排放標準第1030099730規定附表
        六「緊急備用電力設施、起火期間、停車期間及防制設備維修期
        間之排放標準」。
      </p>
    </div>
  )
}
export default ProductDetail
