import React from 'react';
import './recepieContent.scss'

function recepieContent() {
  return (
    <div class="container">
        <div className='container_top_image'>
        </div>
        <div className='container_recepie'>
        <div className='container_recepie_start'>
            <h1>Simple Omelette Recipe</h1>
            <p className='container_recepie_ingres'>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
        </div>
        <div className='container_recepie_preperation'>
            <h2>Preparation time</h2>
                <ul>
                    <li><span><b>Total:</b> Approximately 10 minutes</span></li>
                    <li><span><b>Preparation:</b> 5 minutes</span></li>
                    <li><span><b>Cooking:</b> 5 minutes</span></li>
                </ul>
        </div>
        <div className='container_recepie_ingrediant'>
            <h3>Ingredients</h3>
                <ul>
                    <li><span>2-3 large eggs</span></li>
                    <li><span>Salt, to taste</span></li>
                    <li><span>Pepper, to taste</span></li>
                    <li><span>1 tablespoon of butter or oil</span></li>
                    <li><span>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
                </ul>
        </div>
        <hr />
            <div className="container_recepie_instructions_points">
                <h3>Instructions</h3>
                    <ol type="1">
                        <li><span>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
                        <li><span>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                        <li><span>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
        the eggs evenly coat the surface.</span></li>
                        <li><span>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the 
        middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
                        <li><span>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the 
        fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
                        <li><span>Enjoy: Serve hot, with additional salt and pepper if needed.</span></li>
                    </ol>
            </div>
            <hr />
            <div className="container_recepie_instructions_nutrition">
                <h3>Nutrition</h3>
                <div className="container_recepie_instructions_nutrition_info">
                    <p>The table below shows nutritional values per serving without the additional fillings.</p>
                </div>
                <div className="container_recepie_instructions_nutrition_info_facts">
                    <p>Calories 277kcal</p>
                    <p>Carbs 0g</p>
                    <p>Protein 20g</p>
                    <p>Fat 22g</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default recepieContent