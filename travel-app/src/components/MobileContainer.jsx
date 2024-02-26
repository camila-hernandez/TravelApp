import styles from "./MobileContainer.module.css"

export default function MobileContainer({children}) {
    return (
        <div className = {styles.mobileContainer}>
            {children}
        </div>
    );
}