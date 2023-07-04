import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>
        {`Copyright ©${new Date().getFullYear()} 喬豐國際科技股份有限公司`}
      </h3>
    </div>
  )
}
export default Footer
