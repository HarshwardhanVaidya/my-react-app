import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  let expenses = [
    {
      id: 'e1' ,
      title: 'school fee',
      amount: '250',
      date: new Date(2021,5,3)

    },

    {
      id: 'e2',
      title: 'books',
      amount: '550',
      date: new Date(2021,5,3)

    },

    {
      id: 'e3',
      title: 'food',
      amount: '150',
      date: new Date(2021,5,3)

    },

    {
      id: 'e4',
      title: 'bus',
      amount: '2550',
      date: new Date(2021,5,3)

    }
  ];
  return (
    <div>
      <NewExpense />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
