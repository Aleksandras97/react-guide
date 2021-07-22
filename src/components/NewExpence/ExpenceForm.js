import { useState } from 'react';
import './ExpenceForm.css'

function ExpenceForm(props) {
    
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState(0)
    const [enteredDate, setenteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenceData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        // console.log(expenceData)
        setEnteredTitle('')
        setenteredAmount('')
        setenteredDate('')

        props.onSaveExpenseData(expenceData)
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expence</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenceForm
