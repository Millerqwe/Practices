import Recipe from './recipe';


const Menu = ( {recipes} ) =>
    <article className="menu">
        <h1 className="menu__title">Our menu</h1>
        { recipes.map( (recipe, i) => <Recipe key={i} {...recipe}/> ) }
    </article>
;

export default Menu;