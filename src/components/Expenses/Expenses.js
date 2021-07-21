import Card from "../UI/Card"
import ExpenceItem from "./ExpenceItem"
import './Expenses.css'

function Expenses({items}) {
    return (
        <Card className="expenses">
            <ExpenceItem 
                title={items[0].title} 
                amount={items[0].amount}
                date={items[0].date}
            />
        </Card>
    )
}

export default Expenses
