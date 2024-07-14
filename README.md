# Input field with suggestion list
![Input field with suggestions](https://i.ibb.co/HhzDLc8/Input-field-with-suggestions.png)


## Usage
* Import
```js
import InputFieldWithSuggestionList from './input-field-with-suggestion-list';
```

* Render
```js
function App() {
  // Set list items for input field.
  const listItems = [
    {
      title: 'Option 1',
      description: 'This is a test for option 1',
      tags: ['Option', '1', 'one'],
      clickHandler: () => {
        console.log('option 1 clicked');
      },
      icon: 'https://img.icons8.com/?size=100&id=57371&format=png&color=000000'
    },
    {
      title: 'Option 2',
      description: 'This is a test for option 2',
      tags: ['Option', '2', 'two'],
      clickHandler: () => {
        console.log('option 2 clicked');
      },
      icon: 'https://img.icons8.com/?size=60&id=yln7W1tiSYJz&format=png'
    }
  ];

  // Render component.
  return (
    <InputFieldWithSuggestionList listItems={listItems} />
  );
}

export default App;
```
