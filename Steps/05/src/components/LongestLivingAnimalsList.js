
import { longestLivingAnimals } from './Data';
import { forEach, sortBy } from 'lodash';


export default () => {
    const listContainer = document.createElement('div');
    const orderedList = document.createElement('ol');

    listContainer.className = 'list-container';
    listContainer.innerHTML = 'Longest Living Animals';

    forEach(sortBy(longestLivingAnimals, 'id'), (animal) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${animal.name}, Lifespan: ${animal.lifeSpan}`;
        orderedList.appendChild(listItem);
    });

    listContainer.appendChild(orderedList);

    return listContainer;
};
