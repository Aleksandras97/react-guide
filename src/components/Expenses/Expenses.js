import { useState } from "react"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"

function Expenses({items}) {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (filter) => {
        setFilteredYear(filter);
    }

    const filteredExpenses = items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear    
    })
    

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />


                <ExpensesChart items={filteredExpenses} />
                <ExpensesList filteredYear={filteredYear} filteredItems={filteredExpenses} />
                
            </Card>
        </div>
    )
}

export default Expenses
