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
        Axios.get(`https://opentdb.com/api_difficulty.php`)
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
    

    
    return(
        <div className='main'>
            <form className='container'>
                <h1>Welcome !</h1>

                <select>
                    <option value="0">Select Category:</option>
                    {categories.map((cat) => {
                        return(
                          <option value={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>
                <select>
                    <option value="0">Select Difficulty:</option>
                    <option value="1">easy</option>
                    <option value="2">medium</option>
                    <option value="3">hard</option>
                </select>
                <Link to={Game} style={{textDecoration: 'none'}}>
                    <button className='start' type='submit'>START</button>
                </Link>
            </form>
        </div>
    )
}

export default Category;