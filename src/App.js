import './App.css';
import InputFieldWithSuggestionList from './input-field-with-suggestion-list';

function App() {
  const listItems = [
    {
      title: 'Harry Potter and the Philosopher\'s Stone',
      description: `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.`,
      tags: ['Harry Potter and the Philosopher\'s Stone', 'book', 'J. K. Rowling'],
      clickHandler: () => {
        alertAuthor('J. K. Rowling');
      },
      icon: 'https://img.icons8.com/nolan/64/book.png'
    },
    {
      title: 'The Godfather',
      description: `The Godfather adapted from the famous Mario Puzo’s novel, as pulp. Striving to be better than the book.`,
      tags: ['The Godfather', 'film', 'Francis Ford Coppola'],
      clickHandler: () => {
        alertAuthor('Francis Ford Coppola');
      },
      icon: 'https://img.icons8.com/nolan/64/film-reel.png'
    },
    {
      title: 'The Wizard of Oz',
      description: `According to the library of Congress it is also the most watched movies of all time.`,
      tags: ['The Wizard of Oz', 'film', 'Victor Fleming'],
      clickHandler: () => {
        alertAuthor('Victor Fleming');
      },
      icon: 'https://img.icons8.com/nolan/64/film-reel.png'
    },
    {
      title: 'Citizen Kane',
      description: `Hailed for decades as one of the greatest movies ever to have been made, and a very easy choice for anybody.`,
      tags: ['Citizen Kane', 'film', 'Orson Welles'],
      clickHandler: () => {
        alertAuthor('Orson Welles');
      },
      icon: 'https://img.icons8.com/nolan/64/film-reel.png'
    },
    {
      title: 'The Shawshank Redemption',
      description: `Of all the adaptations of Stephen King stories — and they are beyond amazing because he is the most-adapted living writer — this is only one of two (along with The Shining) to make the list.`,
      tags: ['The Shawshank Redemption', 'film', 'Frank Darabont'],
      clickHandler: () => {
        alertAuthor('Frank Darabont');
      },
      icon: 'https://img.icons8.com/nolan/64/film-reel.png'
    },
    {
      title: 'The Little Prince (Le Petit Prince)',
      description: `The Little Prince (French: Le Petit Prince, pronounced [lə p(ə)ti pʁɛ̃s]) is a novella written and illustrated by French writer and military pilot Antoine de Saint-Exupéry.`,
      tags: ['The Little Prince (Le Petit Prince)', 'book', 'Antoine de Saint-Exupéry'],
      clickHandler: () => {
        alertAuthor('Antoine de Saint-Exupéry');
      },
      icon: 'https://img.icons8.com/nolan/64/book.png'
    },
    {
      title: 'The Hobbit',
      description: `The Hobbit, or There and Back Again is a children's fantasy novel by the English author J. R. R. Tolkien.`,
      tags: ['The Hobbit', 'book', 'J. R. R. Tolkien'],
      clickHandler: () => {
        alertAuthor('J. R. R. Tolkien');
      },
      icon: 'https://img.icons8.com/nolan/64/book.png'
    },
  ];

  function alertAuthor(author) {
    alert('Author: ' + author);
  }

  return (
    <InputFieldWithSuggestionList listItems={listItems} displaySetting={{content: true, tags: true}} />
  );
}

export default App;
