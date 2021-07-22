import ExpenceForm from './ExpenceForm'
import './NewExpence.css'

function NewExpence(props) {
    const saveExpenseDataHandler = (enterdExpenceData) => {
        const expenceData = {
            ...enterdExpenceData,
            id: Math.random().toString()
        };

        props.onAddExpence(expenceData);
    }

    return (
        <div className="new-expense">
            <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpence
