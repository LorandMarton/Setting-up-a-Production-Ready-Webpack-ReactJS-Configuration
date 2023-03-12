
import React, { Suspense } from 'react';
import LongestLivingAnimals from './LongestLivingAnimalsList';
import './app.scss';

const App = () => {
    const MostPoisonousAnimalsList = React.lazy(() => import(/* webpackChunkName: "MostPoisonousAnimalsList" */ './MostPoisonousAnimalsList'));
    const FastestAnimalsList = React.lazy(() => import(/* webpackChunkName: "FastestAnimalsList" */ './FastestAnimalsList'));
    return (
        <div className="container">
            <h1 className="app-title">Animal World Top 5 Lists</h1>
            <div className="top-five-lists">
                <Suspense fallback={<div>Loading...</div>}>
                    <MostPoisonousAnimalsList />
                    <FastestAnimalsList />
                </Suspense>
                {LongestLivingAnimals()}
            </div>
        </div>
    );
};

export default App;
