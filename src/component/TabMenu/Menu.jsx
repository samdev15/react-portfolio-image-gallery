import React from 'react';
import { useState } from 'react';
import '../TabMenu/menu.css';
import CatItem from './CatItem';
import MenuData from './MenuData';
import { MenuList } from './MenuList';

function Menu() {

    let catList = [...new Set(MenuData.map((ele, i, arr) => ele.category)), 'all'];

    const [menuItem, setMenuItem] = useState(MenuData);
    const [catItem, setCatItem] = useState(catList);

    const filterItem = (item) => {
        if (item === 'all') {
            setMenuItem(MenuData);
            return;
        }

        const updateItem = MenuData.filter((ele) => {
            return (item === ele.category);
        });

        setMenuItem(updateItem);
    }

    return (
        <div>
            <h1 className="text-center my-3">Order Your Favourite Dish</h1>
            <hr />

            <CatItem filterItem={filterItem} catList={catItem} />
            <MenuList menuItem={menuItem} />
        </div>
    )
}

export default Menu
