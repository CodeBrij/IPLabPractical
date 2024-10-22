import React, {useState, useEffect} from 'react'

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedrecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null)
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getter");
        const result = await response.json();
        setRecipes(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Data", error);
        setError("No Recipes Found!! : ", {error});
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleRecipeClick = (index) => {
      setSelectedrecipe(recipes[index]);
    };
  
    const handleBackClick = (index) => {
      setSelectedrecipe(null);
    };

    return(
    <div>
      <h1>Recipe Showcase Platform</h1>
      <p className="p-header">List of Delicious Recipes!!</p>
      {loading && (<h2 className="loader">Loading...</h2>)}
      {error!=null && (<h2 className='error'>{error}</h2>)}
      {selectedRecipe ? (
        <div className='selected-recipe'>
          <h2 className="recipe-title">{selectedRecipe.name}</h2>
          <h4>    
            <b>Time:</b> <br></br> {selectedRecipe.time}
          </h4>
          <p>
            <b>Ingredients:</b> <br></br> {selectedRecipe.ingredients}
          </p>
          <p>
            <b>Instructions:</b> <br></br> {selectedRecipe.instructions}
          </p>
          <button onClick={handleBackClick}> Back to Recipes</button>
        </div>
      ) : (
        <div>
          <ul className="recipe-list">
            {recipes.map((singleRecipe, index) => (
              <li key={index} className="recipe-item">
                <h2 className="recipe-title">{singleRecipe.name}</h2>
                <h4>
                  <b>Time:</b>  {singleRecipe.time}
                </h4>
                <h4>
                  <b>Ingredients:</b> {singleRecipe.ingredients}
                </h4>
                <button
                  onClick={() => {
                    handleRecipeClick(index);
                  }}
                >
                  View Recipe
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
}

export default Recipe;