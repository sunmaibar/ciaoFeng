import styles from './products.module.css'
import Image from 'next/image'
const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coverImg}>
        <Image src='/pic/image-001.jpg' fill={true} className={styles.corimg} />
      </div>
      <h1 className={styles.title}>柴油發電機黑煙淨化設備</h1>
      <p className={styles.desc}>
        過濾淨化器除了要有較高的轉 化過濾效率外，為了確保引擎
        的有功效率和輸出功率，還應 具有較低的壓力降和排氣背壓;
        所用材料應耐高溫，並有較長 的使用壽命.。喬豐國際科技有
        限公司提供您過濾淨化器最專 業的選擇。
      </p>
      <div className={styles.threeColumn}>
        <div className={styles.items}>
          <div className={styles.text}>
            <h3>
              觸媒轉化器 <span className={styles.cata}>Catalytic purifier</span>
            </h3>
            <p>
              觸媒轉化器是用鈀(Pd)、鉑(Pt)及銠(Rh)活性高、
              溫度低點燃的貴金屬為主要成份，並以特殊的觸媒
              促進劑配方及洗覆技術(washcoating)大幅提升
              貴重金屬的利用率，因此可依不同柴油、汽油引擎
              的需求，符合最新環保排放法規。
            </p>
          </div>
          <div className={styles.img}>
            <Image
              alt='觸媒轉化器'
              src='/pic/products/products-first1.png'
              width={150}
              height={150}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.text}>
            <h3>陶瓷載體</h3>
            <p>
              陶瓷蜂窩載體堇青石陶瓷或矽酸鈣材質製成，其耐
              溫攝氏1000°C以上，有自動再生(200°C)，可選用每平方英吋
              <span>100/200/300/400</span>
            </p>
            <p>全程背壓1.2in-hg以下</p>
            <div className={styles.line}></div>
            <p>
              另外選擇可附加 <br />
              💎 加熱器在發電機運轉時使用 <br />
              💎 安全旁通閥門型
            </p>
          </div>
          <div className={styles.img}>
            <Image
              alt='加熱器在發電機'
              src='/pic/products/products-first2.png'
              width={150}
              height={150}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.text}>
            <h3>金屬載體</h3>
            <p>
              將鐵烙鋁的特殊金屬薄片捲成類似蜂窩體，有自動
              再生方式，可選濾芯氣孔用每平方英吋
              <span>100/200/300/400</span>
            </p>
            <p>全程背壓1.2in-hg以下</p>
            <div className={styles.line}></div>
            <p>
              另外選擇可附加 <br />
              💎 加熱器在發電機運轉時使用 <br />
              💎 安全旁通閥門型
            </p>
          </div>
          <div className={styles.img}>
            <Image
              alt='加熱器在發電機'
              src='/pic/products/products-first3.png'
              width={150}
              height={150}
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <p className={styles.descText}>
        柴油引擎用氧化催化劑(用鈀鉑銠 活性高、溫度低點燃的貴重金屬
        為主要成分)，原則上可以與汽油 引擎的相同，活性成分可用鉑採
        用氧化催化劑的目的主要是降低 微粒排放。儘管因柴油引擎排氣
        溫度低，使得微粒中的碳煙些許 的氧化，但氧化催化劑可以轉化
        可溶性有機組分(SOF)中大部分的 碳氫化合物，得到微粒排放降低
        的效果，同時也可使本來不成問 題的HC和CO排放進一步降低。
      </p>
      <div className={styles.four}>
        <div className={styles.groupp1}>
          <Image
            alt='喬豐國際科技'
            src='/pic/p1.png'
            width={300}
            height={142}
            className={styles.p4img}
          />
          <Image
            alt='喬豐國際科技'
            src='/pic/p2.png'
            width={300}
            height={137}
            className={styles.p4img}
          />
        </div>
        <div className={styles.groupp1}>
          <Image
            alt='喬豐國際科技'
            src='/pic/p3.png'
            width={300}
            height={142}
            className={styles.p4img}
          />
          <Image
            alt='喬豐國際科技'
            src='/pic/p4.png'
            width={300}
            height={133}
            className={styles.p4img}
          />
        </div>
      </div>
      {/* ProductDetail */}
      <div className={styles.productDetail}>
        <h1 className={styles.comp}>組成原件與配件</h1>
        <div className={styles.two}>
          <div className={styles.left}>
            <h1 className={styles.title2}>雙效型黑煙過濾淨化器設備</h1>
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
            <h1 className={styles.title2}>自動再生型黑煙過濾淨化器設備</h1>
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
    </div>
  )
}
export default Products
