import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Category.scss';
import { Game } from '../../routes/routes';
function Category() {
    const [ categories , setCategories ] = useState([]);
    useEffect(() =>{
        Axios.get(`https://opentdb.com/api_category.php`)
          .then(res => res.data)
          .then(data => {
            const categories = data.trivia_categories.map((category) => ({
                id: category.id,
                name: category.name,
            }))
            console.log(categories);
            setCategories(categories);
        });
    },[])
    
    function getSelectedCategory(event) {
        const categoryID = event.target.value;
        console.log(categoryID);
     }
    function getSelectedDifficulty(event) {
        const difficyltyValue = event.target.value;
        console.log(difficyltyValue);
     }
    
    return(
        <div className='main'>
            <form className='container'>
                <h1>Welcome !</h1>

                <select onChange={getSelectedCategory}>
                    <option selected disabled>Select Category:</option>
                    {categories.map((cat) => {
                        return(
                          <option value={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <select onChange={getSelectedDifficulty}> 
                    <option selected disabled>Select Difficulty:</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
                <Link to={Game} style={{textDecoration: 'none'}}>
                    <button className='start' type='submit'>START</button>
                </Link>
            </form>
        </div>
    )
}

export default Category;