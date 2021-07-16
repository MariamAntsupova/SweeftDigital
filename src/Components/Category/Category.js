import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';
import { Game } from '../../routes/routes';

function Category() {
    const [ category , setCategory ] = useState();

    // fetch('https://opentdb.com/api_category.php')
    //     .then(resp => resp.json())
    //     .then(
    //         (result) => {
    //             if (result.trivia_categories) {
    //                 setCategory(result.trivia_categories)
    //                 console.log(result)
    //             } else {
    //                 setCategory()
    //             }
    //         },
    //     )
    return(
        <div className='main'>
            <form className='container'>
                <h1>Welcome !</h1>

                <select>
                    <option value="0">Select Category:</option>
                    {/* <option>{category}</option> */}
                    <option value="1">Entertainment</option>
                    <option value="2">Art</option>
                    <option value="3">History</option>
                    <option value="4">Celebrities</option>
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