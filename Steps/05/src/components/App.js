import LongestLivingAnimals from './LongestLivingAnimalsList';
import './app.scss';

export default () => {
    const container = document.createElement('div');
    const appTittle = document.createElement('h1');
    const topFiveLists = document.createElement('div');

    container.setAttribute('class', 'container');
    appTittle.setAttribute('class', 'app-title');
    appTittle.innerHTML = 'Animal World Top 5 Lists';
    topFiveLists.setAttribute('class', 'top-five-lists');

    import(/* webpackChunkName: "MostPoisonousAnimalsList" */ './MostPoisonousAnimalsList')
        .then(({ getMostPoisonousAnimalsList }) => {
            topFiveLists.appendChild(getMostPoisonousAnimalsList());
        });
    import(/* webpackChunkName: "FastestAnimalsList" */'./FastestAnimalsList')
        .then(({ getFastestAnimalsList }) => {
            topFiveLists.appendChild(getFastestAnimalsList());
        });

    topFiveLists.appendChild(LongestLivingAnimals());
    container.append(appTittle, topFiveLists);

    return container;
};
