import s from './style.module.css'
import { MenuListItem } from '../MenuListItem/MenuListItem'
// On met la variable/const en dehors du composant 
// pour éviter que le programme la redéclare/recalcul a chaque fois que le composant est re-renderé :
import { DIFFICULTIES } from './constant.js'

export function MenuList({currentDifficulty, onItemClick}) {


    // Equivalent return (pas de code/calcul possible)
    const result = DIFFICULTIES.map((difficulty) => (
        <MenuListItem
            key={difficulty}
            onClick={onItemClick} 
            difficulty={difficulty}
            isSelected={currentDifficulty==difficulty}
        />
    ));

    // Si on veut du code avant (accolades + return):
    const result2 = DIFFICULTIES.map((difficulty) => {
        console.log("code avant return")
        return (
            <MenuListItem
                key={difficulty}
                onClick={onItemClick} 
                difficulty={difficulty}
                isSelected={currentDifficulty==difficulty}
            />
        )
    });

    return(
        <div className={s.container}>

            {result}

            {/* <MenuListItem 
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
            /> */}


        </div>
    )
}