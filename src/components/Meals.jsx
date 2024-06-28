import { useState, useEffect } from 'react';
import MealItem from './MealItem.jsx';
export default function Meals() {
    const [mealData, setMealData] = useState([]);
    useEffect(() => {
        async function getMealsData() {
            const URL = 'http://localhost:3000/meals';
            const response = await fetch(URL);
            if (!response.ok) {
                console.log('response not ok');
                console.log(response);
                return [];
            }
            const data = await response?.json();
            setMealData(data);
        }    
        getMealsData();    
    }, [])
    return (
        <ul id="meals">
            {mealData.map((item) => {
                return (
                    <MealItem key={item.id} meal={item}></MealItem>
                )
            })}
        </ul>
    );
}