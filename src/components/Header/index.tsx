import cn from 'classnames'
import type { FC } from 'react';
import styles from "./style.module.scss"


interface Props {
    className?: string;
}

const Header: FC<Props> = ({ className }) => {
    return (

        <div className={cn(className, styles.header)}></div>
    )
}

export default Header;