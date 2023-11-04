import s from './style.module.css'
import { MenuListItem } from '../MenuListItem/MenuListItem'

export function MenuList({currentDifficulty, onItemClick}) {

    return(
        <div className={s.container}>
            <MenuListItem 
                onClick={onItemClick} 
                difficulty="Low"
                isSelected={currentDifficulty=="Low"}
            />
            <MenuListItem 
                onClick={onItemClick} 
                difficulty="Medium"
                isSelected={currentDifficulty=="Medium"}
            />
            <MenuListItem 
                onClick={onItemClick} 
                difficulty="Hard"
                isSelected={currentDifficulty=="Hard"}
            />
            <MenuListItem 
                onClick={onItemClick} 
                difficulty="Insane"
                isSelected={currentDifficulty=="Insane"}
            />
        </div>
    )
}