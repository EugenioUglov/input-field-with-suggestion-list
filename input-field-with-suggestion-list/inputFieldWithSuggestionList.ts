type ListItemType = {
    title: string, 
    clickHandler: () => void, 
    description: string, 
    tags: string[], 
    icon: string
};

export default class inputFieldWithSuggestionList {
    #listItemsToDisplay: ListItemType[] = [];
    

    setListItemsToDisplay(listItems: ListItemType[]): ListItemType[] {
        for (const key in listItems) {
            this.addListItemToDisplay(listItems[key]);
        }

        return this.#listItemsToDisplay;
    }

    addListItemToDisplay(listItem: ListItemType): ListItemType[] {
        this.#listItemsToDisplay.push(listItem);
        
        return this.#listItemsToDisplay;
    }

    getListItemsToDisplay(): ListItemType[] {
        return this.#listItemsToDisplay;
    }

    removeListItems(): ListItemType[] {
        this.#listItemsToDisplay = [];

        return this.#listItemsToDisplay; 
    }
}