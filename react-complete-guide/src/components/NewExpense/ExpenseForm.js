import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const initialState = {
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }
    const [userInput, setUserInput] = useState(initialState);

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setUserInput({...initialState});
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type="text" 
                    value={userInput.enteredTitle} 
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                    type="number" 
                    value={userInput.enteredAmount} 
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    type="date" 
                    value={userInput.enteredDate} 
                    min="2019-01-01" 
                    max="2022-12-31" 
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;