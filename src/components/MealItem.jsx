import Button from './UI/Button';
import {useContext} from 'react';
import { CartContext } from '../store/CartContext';

export default function MealItem({meal}){
    const {addItem} = useContext(CartContext);
    function clickHandler(meal){
        addItem(JSON.parse(JSON.stringify(meal)));
    }
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="meal-image" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">$ {meal.price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button textOnly onClick={()=>clickHandler(meal)}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}