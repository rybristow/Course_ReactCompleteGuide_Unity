import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {

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
      title: 'Birthday Baloon', 
      amount: 4.50, 
      date: new Date(2022, 4, 2)
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/> 
    </div>
  );
}



export default App;
