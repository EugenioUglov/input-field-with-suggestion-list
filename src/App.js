import './App.css';
import InputFieldWithSuggestionList from './input-field-with-suggestion-list';

function App() {
  const listItems = [
    {
      title: 'Option 1',
      tags: ['Option', '1', 'little', 'pobby'],
      clickHandler: ()=> {
        console.log('option clicked');
      },
      icon: 'https://img.icons8.com/?size=100&id=57371&format=png&color=000000'
    },
    {
      title: 'Option 2',
      tags: ['Option', '2', 'grande pobby'],
      clickHandler: ()=> {
        console.log('option clicked');
      }
    },
    {
      title: 'Option 3',
      tags: ['Option 3', 'Mega PONNUS'],
      clickHandler: ()=> {
        console.log('option clicked');
      }
    },
    {
      title: 'Option 4',
      tags: ['Option 4', 'Mega PONNUS'],
      clickHandler: ()=> {
        console.log('option clicked');
      }
    },
    {
      title: 'Option 5',
      tags: ['Option 5', 'Mega PONNUS'],
      clickHandler: ()=> {
        console.log('option clicked');
      }
    }
  ];

  return (
    <InputFieldWithSuggestionList listItems={listItems} />
  );
}

export default App;
