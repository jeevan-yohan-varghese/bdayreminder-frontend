import { Divider } from "@material-ui/core"
import styles from './header.module.css'

const Header =()=>{

    return(
            <div className={styles.container}>
                <h1>🎉</h1>
                <Divider/>
            </div>
    );
}

export default Header;