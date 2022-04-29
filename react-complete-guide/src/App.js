import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    { 
      id: 'e0',
      title: 'Camlink', 
      amount: 99.99, 
      date: new Date(2022, 4, 1)
    },
    { 
      id: 'e1',
      title: 'Lights', 
      amount: 200.01, 
      date: new Date(2022, 4, 2)
    },
    { 
      id: 'e2',
      title: 'Mini-HDMI cable', 
      amount: 7.50, 
      date: new Date(2022, 3, 27)
    },
    { 
      id: 'e3',
      title: 'Birthday Balloon', 
      amount: 4.50, 
      date: new Date(2022, 4, 2)
    },
  ];

  const addExpenseHandler = (newExpense) => {
    console.log('In App.js');
    expenses.push(newExpense)
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/> 
    </div>
  );
}



export default App;
