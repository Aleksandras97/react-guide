import './ExpenceItem.css'

function ExpenceItem() {

    const expenceDate = new Date().getFullYear()
    const expenceTitle = "Car Inasurance";
    const expenceAmount = 294.67;

    return (
        <div className="expense-item">
            <div>{expenceDate}</div>
            <div className="expense-item__description">
                <h2 className="">{expenceTitle}</h2>
                <div className="expense-item__price">${expenceAmount}</div>
            </div>
        </div>
    )
}

export default ExpenceItem
