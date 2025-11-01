import React, {ReactElement} from 'react';
import classNames from "classnames";
import styles from './ButtonStatistics.module.css'

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    classname: string
    width?: string
    text?: string
    onClick: () => void;
    withHover?: boolean
}

export const ButtonStatistics: React.FC<IButtonProps> = (props) => {

    const {text, classname, onClick, withHover} = props

    const buttonWrap = classNames({
        [styles[classname]]: true,
        [styles.hover]: withHover
    })

    return (
        <button className={buttonWrap}  onClick={onClick}>{text}</button>
    );
};
