import styles from './footer.module.css'

const Footer =()=>{
    return(
        <div className={styles.container}>
            <h1>Birthday Reminder</h1>
            <div>
            <a href="github.com/jeevan-yohan-varghese">Github - Jeevan</a>
            <a href="github.com/gokul-krishna-r">Github - Gokul</a>
            </div>
        </div>

    );
}



export default Footer;