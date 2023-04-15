import './ExpensesList.css';
import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = (data) =>{

    let listContent = <p>No expenses found</p>

    if(data.filteredList.length > 0){
        listContent = data.filteredList.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
            />
        ));    
    }
    return (
        <ul className='expenses=list'>
            {listContent}
        </ul>
    );
}

export default ExpensesList;