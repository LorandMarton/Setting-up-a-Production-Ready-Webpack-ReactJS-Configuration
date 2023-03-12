import { fastestAnimals } from './Data';
import moment from 'moment';
// import { forEach } from 'lodash';
// import forEach from 'lodash/forEach';
import { forEach } from 'lodash-es';


export const getFastestAnimalsList = () => {
    const listContainer = document.createElement('div');
    const span = document.createElement('span');
    const orderedList = document.createElement('ol');

    listContainer.className = 'list-container';
    listContainer.innerHTML = 'Fastest Animals';
    span.className = 'date';
    span.innerHTML = ` Date ${moment().format('MMM Do')}`;

    forEach(fastestAnimals, (animal) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${animal.name}, Speed: ${animal.speed} kph`;
        orderedList.appendChild(listItem);
    });

    listContainer.appendChild(span);
    listContainer.appendChild(orderedList);

    return listContainer;
};
