# Input field with suggestion list
![Input field with suggestions](https://i.ibb.co/HhzDLc8/Input-field-with-suggestions.png)<br />

[Watch the video](https://youtu.be/cpjbdSYuV6g)<br />
[![Watch the video](https://img.youtube.com/vi/cpjbdSYuV6g/hqdefault.jpg)](https://www.youtube.com/embed/cpjbdSYuV6g)<br />


## Usage
Copy the folder /src
/input-field-with-suggestion-list to your project

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
