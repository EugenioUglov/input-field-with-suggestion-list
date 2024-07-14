export default class ItemList {
    #listItemByTitle = {};
    #itemListTitlesByTag = {};

    
    add({title, clickHandler, description, tags, icon}) {
        const listItem = {
            title: title,
            clickHandler: clickHandler,
            description: description,
            tags: tags,
            icon: icon
        };
        
        const getNormalizedTags = (tagsToNormalize) => {
            const normalizedTags = new Set();
        
            for (let tagToNormalize of tagsToNormalize) {
                const wordsOfTag = this.#getArrayByString(tagToNormalize);

                for (const wordOfTag of wordsOfTag) {
                    const word = wordOfTag;
                    normalizedTags.add(word.toLowerCase());
                }
            }
        
            return normalizedTags;
        }

        const normalizedTags = getNormalizedTags(tags);

        for (const tag of normalizedTags) {
            if (this.#itemListTitlesByTag[tag] === undefined) {
                this.#itemListTitlesByTag[tag] = [];
            }

            this.#itemListTitlesByTag[tag].push(title);
        }

        if (this.#listItemByTitle[title] !== undefined) {
            // Item already exists.
            return {message: 'Item already exists'};
        }

        this.#listItemByTitle[title] = listItem;


        return {message: 'Item with title ' + listItem.title + ' has been added'};
    }

    getListItemByTitle(title) {
        return this.#listItemByTitle[title];
    }

    getAllListItemTitles() {
        return Object.keys(this.#listItemByTitle);
    }

    getItemListTitlesByTag() {
        return this.#itemListTitlesByTag;
    }

    #getArrayByString(inputString) {
        const arrayByString = [];

        inputString = inputString.trim();

        // Remove all multiple spaces.
        inputString = inputString.replace(/ +(?= )/g,'');

        const wordsOfString = inputString.split(" ");

        for (let word of wordsOfString) {
            arrayByString.push(word.trim());
        }

        return arrayByString;
    }
}