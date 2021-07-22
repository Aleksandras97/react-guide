import ExpenceItem from './ExpenceItem';
import './ExpensesList.css'

function ExpensesList({filteredItems, filteredYear}) {



    if(filteredItems.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return (
        <ul className="expenses-list">
            {filteredItems.map(item => 
            <ExpenceItem 
                key={item.id}
                title={item.title} 
                amount={item.amount}
                date={item.date}
            />
        )}
        </ul>
    )
}

export default ExpensesList
