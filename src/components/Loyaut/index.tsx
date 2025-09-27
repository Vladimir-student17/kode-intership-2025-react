import type { FC, ReactNode } from "react";
import cn from 'classnames';
import styles from './styles.module.scss'
import Header from "@components/Header";

interface Props {
    className?: string;
    children?: ReactNode;
}

const Layout: FC<Props> = ({ className, children }) => {
    return (
        <div className={cn(className, styles.containre)}>
            <Header />
            {children}
        </div >
    )
}

export default Layout;