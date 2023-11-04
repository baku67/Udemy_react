import s from './style.module.css'
import { useState } from 'react'

export function MenuListItem({onClick, difficulty, isSelected}) {

    const [isHovered, setIsHovered] = useState(false);


    function getBackgroundColor() {
        if(isHovered) {
            return "cyan"
        }
        else if(isSelected) {
            return "darkCyan"
        }
        else {
            return "#eff0ef"
        }
    }


    return(
        <div 
            className={s.container} 
            style={{
                cursor: 'pointer', 
                backgroundColor: getBackgroundColor()
            }}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(difficulty)}
        >
            Set to {difficulty}
        </div>
    )
}