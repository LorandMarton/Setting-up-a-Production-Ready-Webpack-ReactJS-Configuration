import React from 'react';
import { mostPoisonousAnimals } from './Data';
import moment from 'moment';
import { map } from 'lodash-es';


const MostPoisonousAnimalsList = () => {
    return (
        <div className='list-container'>
            <h2>Most Poisonous Animals</h2>
            <span className="date">Date {moment().format('MMM Do')}</span>
            <ol>
                {map(mostPoisonousAnimals, animal =>
                    <li key={animal.id}>
                        {`${animal.name}, Speed: ${animal.speed} kph`}
                    </li>
                )}
            </ol>
        </div>
    );
};
export default MostPoisonousAnimalsList;
