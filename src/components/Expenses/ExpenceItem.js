import Card from '../UI/Card';
import './ExpenceItem.css'
import ExpanceDate from './ExpanceDate.js'

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
