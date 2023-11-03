import s from './style.module.css'
import { useState } from 'react'

export function MenuListItem(props) {

    const [isHovered, setIsHovered] = useState(false);

    function onMouseHover() {
        setIsHovered(true)
    }

    function onMouseLeave() {
        setIsHovered(false)
    }

    console.log(isHovered)

    return(
        <div 
            className={s.container} 
            onMouseEnter={onMouseHover} 
            onMouseLeave={onMouseLeave}
            style={{cursor: 'pointer', backgroundColor: isHovered ? "cyan" : "#eff0ef"}}
        >
            Set to {props.difficulty}
        </div>
    )
}