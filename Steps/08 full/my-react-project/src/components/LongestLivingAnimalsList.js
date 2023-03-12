import React from 'react';
import { longestLivingAnimals } from './Data';
import { map, sortBy } from 'lodash-es';


// export default () => {
const LongestLivingAnimalsList = () => {
    const sortedAnimals = sortBy(longestLivingAnimals, 'id');

    return (
        <div className="list-container">
            <h2>Longest Living Animals</h2>
            <ol>
                {map(sortedAnimals, animal =>
                    <li key={animal.id}>
                        {`${animal.name}, Lifespan: ${animal.lifeSpan}`}
                    </li>
                )}
            </ol>
        </div>
    );
};

export default LongestLivingAnimalsList;
