import s from "./style.module.css";

export function DisplayDifficulty(props) {

    return(
        <div className={s.container}>
            {props.currentDifficulty ? 
                `Difficulty set to: ${props.currentDifficulty}` :
                "No difficulty set"
            }
        </div>
    )
}