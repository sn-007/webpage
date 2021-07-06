import "./portfolioList.scss"

function PortfolioList({ title, active, setSelected, id }) {
    return (
        <li 
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={()=> setSelected(id)}
        key={id}
        >
            {title}

        </li>
    )
}

export default PortfolioList
