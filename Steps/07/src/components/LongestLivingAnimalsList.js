
import { longestLivingAnimals } from './Data';
// import { forEach, sortBy } from 'lodash';
// import forEach from 'lodash/forEach';
// import sortBy from 'lodash/sortBy';
import { forEach, sortBy } from 'lodash-es';


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
