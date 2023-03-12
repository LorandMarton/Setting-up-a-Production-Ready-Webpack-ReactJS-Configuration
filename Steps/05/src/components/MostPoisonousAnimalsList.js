import { mostPoisonousAnimals } from './Data';
import moment from 'moment';
import { forEach } from 'lodash';


export const getMostPoisonousAnimalsList = () => {
    const listContainer = document.createElement('div');
    const span = document.createElement('span');
    const orderedList = document.createElement('ol');

    listContainer.className = 'list-container';
    listContainer.innerHTML = 'Most Poisonous Animals';
    span.className = 'date';
    span.innerHTML = ` Date ${moment().format('MMM Do')}`;

    forEach(mostPoisonousAnimals, (animal) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${animal.name}`;
        orderedList.appendChild(listItem);
    });

    listContainer.appendChild(span);
    listContainer.appendChild(orderedList);

    return listContainer;
};
