import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
                .then(data => setCategories(data));
        },
        []
    )

    return <>{categories.map(category => <div><NavLink to={`/category/${category}`}>{category}</NavLink></div>)}</>
}
export default Menu;