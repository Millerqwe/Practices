import Ingredient from './ingredient';
import Step from './step';

const Recipe = ( {name, ingredients, steps} ) =>
    <section className="menu__recipe recipe">
        <h2 className="recipe__name">{name}</h2>
        <h3>Ingredients for the recipe</h3>
        <ul className="recipe__ingredients">
            { ingredients.map( ({name}, i) => <Ingredient key={i} name={name} /> ) }
        </ul>
        <h3>Steps of coocking</h3>
        <ul className="recipe__steps">
            { steps.map( (step, i) => <Step key={i} step={step}/>) }
        </ul>
    </section>
;

export default Recipe;