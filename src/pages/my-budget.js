import React from 'react';
import Budget from '../components/Budget';
import ExpenseTotal from '../components/ExpenseTotal';
import ExpenseList from '../components/ExpenseList';
import AddExpenseForm from '../components/AddExpenseForm';
import RemainingBudget from '../components/Remaining';

import { AppProvider } from '../context/AppContext';

const myBudget = () => {
    return (
        <AppProvider>
        <div className='container'>
        <div className='row mt-3 card-wrapper'>
            <div className='col-sm'>
                <Budget />
            </div>
            <div className='col-sm'>
                <RemainingBudget />
            </div>
            <div className='col-sm'>
                <ExpenseTotal />
            </div>
        </div>
        <div class="expense-list-wrapper">
        <h3 className='mt-3'>List of Expenses</h3>
        <div className='row '>
            <div className='col-sm'>
                <ExpenseList />
            </div>
        </div>
        </div>
        <div class="expense-list-wrapper">
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
            <div className='col-sm'>
                <AddExpenseForm />
            </div>
        </div>
        </div>
    </div>
    </AppProvider>
    );
  };
  
  export default myBudget;