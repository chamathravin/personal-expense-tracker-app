import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	if (totalExpenses >= budget*(90/100)){
		alert('You spent 90% of your income')
	}

	return (
		<div class={`alert p-4 card ${alertType}`}>
			<span>Remaining: <b>LKR {budget - totalExpenses}</b></span>
		</div>
	);
};

export default RemainingBudget;
