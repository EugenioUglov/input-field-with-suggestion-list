import React from 'react';
import ReactDOM from 'react-dom/client';
import './inputFieldWithSuggestionList.css';
import InputFieldWithSuggestionList from './inputFieldWithSuggestionList.ts';
import SearcherByTags from './searcherByTags.js';
import  ItemList from './itemList.js';
import { useState, useEffect, useRef } from 'react';

function InputFieldWithSuggestionListComponent({listItems}) {
  const inputFieldWithSuggestions = new InputFieldWithSuggestionList();
  const itemList = new ItemList();
  const searcherByTags = new SearcherByTags();

  let [itemListToDisplayReactElements, setListItemsToDisplayReactElements] = useState([]);
  const inputFieldRef = useRef(null);
  const itemListRef = useRef(null);

  const handleClickOutside = (event) => {
    if (inputFieldRef.current && 
      ! inputFieldRef.current.contains(event.target) && 
      itemListRef.current && 
      ! itemListRef.current.contains(event.target)) {
        hideItemList();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside,
        true
      );
    };
  }, [inputFieldRef, itemListRef]);


  for (const listItem of listItems) {
    itemList.add(listItem);
  }

  function displayItemListByUserPhrase(userPhrase) {
    let titles = [];

    if ( ! userPhrase) {
      titles = itemList.getAllListItemTitles();
    }
    else {
      titles = searcherByTags.getTargetValuesByUserRequestWithOrderFromMostRelativeResults({userRequest: userPhrase, targetValuesByTag: itemList.getItemListTitlesByTag()});
    }

    for (const title of titles) {
      const listItem = itemList.getListItemByTitle(title);
      inputFieldWithSuggestions.addListItemToDisplay(listItem);
    }

    setListItemsToDisplayReactElements(getListItemsToDisplayReactElements(inputFieldWithSuggestions.getListItemsToDisplay()));


    function getListItemsToDisplayReactElements(listItems) {
      const listItemsReactElements = [];

      for (const listItem of listItems) {
        const onClickListItem = () => {
            if (listItem.clickHandler !== undefined) {
              hideItemList();

              listItem.clickHandler();
            }

            inputFieldWithSuggestions.setListItemsToDisplay([]);
        };

        listItemsReactElements.push(
            <li
                title={listItem.description}
                className="list-item"
                style={{
                    display: 'flex',
                    padding: 0,
                    height:'50px',
                    alignItems:'center',
                    cursor: 'pointer'
                }}
                onClick={onClickListItem}
                key={listItem.title}>
                <img
                    src={listItem.icon}
                    height={listItem.icon ? '100%' : 'none'}
                    width='50px'
                    style={{padding: '5px'}}>
                </img>
                <span style={{marginLeft: '5px'}}>{listItem.title}</span>
            </li>
        );
      }

      return listItemsReactElements;
    }

    return;
  }

  
  function hideItemList() {
    setListItemsToDisplayReactElements([]);
  }


  return (
    <div className='center-top'>
      <input 
        type="text" 
        id="inputFieldWithSuggestions" 
        placeholder="Type here to search..." 
        ref={inputFieldRef}
        onClick = {(e) => displayItemListByUserPhrase(e.target.value)}
        onFocus = {(e) => displayItemListByUserPhrase(e.target.value)}
        onChange = {(e) => displayItemListByUserPhrase(e.target.value)}
      />
      <ul
        className="list"
        ref={itemListRef}>{itemListToDisplayReactElements}
      </ul>
    </div>
  );
}


export default InputFieldWithSuggestionListComponent;