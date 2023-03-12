import React from 'react';
import moment from 'moment';
import { map } from 'lodash-es';
import { fastestAnimals } from './Data';

const getFastestAnimalsList = () => {
    return (
        <div className="list-container">
            <h2>Fastest Animals</h2>
            <span className="date">Date {moment().format('MMM Do')}</span>
            <ol>
                {map(fastestAnimals, animal =>
                    <li key={animal.id}>
                        {animal.name}, Speed: {animal.speed} kph
                    </li>
                )}
            </ol>
        </div>
    );
};

export default getFastestAnimalsList;
