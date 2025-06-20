import React from "react";
import style from './Button.module.css';

export default function Button({children, disabled, type="primary", onClick, fullLength}) {

    const classHandle = () => {
        switch (type) {
            case "primary":
                return style.primary;
            case "secondary": 
                return style.secondary;
            case "text":
                return style.text;
            default:
                return style.primary;
        }
    }

    return(
        <button disabled={disabled} style={{width: fullLength ? '100%' : null}} className={classHandle(type)} onClick={() => onClick()}>{children}</button>
    );
}
