import { useState } from "react"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"

function Expenses({items}) {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (filter) => {
        setFilteredYear(filter);
    }

    

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpensesList filteredYear={filteredYear} items={items} />
                
            </Card>
        </div>
    )
}

export default Expenses
