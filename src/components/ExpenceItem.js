import Card from './Card';
import ExpanceDate from './ExpanceDate';
import './ExpenceItem.css'

function ExpenceItem({ title, amount, date}) {
    
    return (
        <Card className="expense-item">
            <ExpanceDate date={date} />
            <div className="expense-item__description">
                <h2 className="">{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    )
}

export default ExpenceItem
