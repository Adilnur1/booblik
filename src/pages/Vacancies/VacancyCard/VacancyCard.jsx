import './VacancyCard.scss'

export const VacancyCard=(props)=>{
    const {title}=props
    return(
        <div className="card">
             <div className="card__title">
                {title}
             </div>
             <div className="card__desc">
                {title}
             </div>
             <button className="card__btn">
                Откликнуться
             </button>
        </div>
    )
}