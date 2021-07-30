import React from 'react';
import { useState } from 'react';
import '../TabMenu/menu.css';
import MenuData from './MenuData';

function Menu() {

    const [menuItem, setMenuItem] = useState(MenuData);

    const filterItem = (item) => {
        const updateItem = MenuData.filter((ele) => {
            return (item === ele.category);
        });

        setMenuItem(updateItem);
    }

    return (
        <div>
            <h1 className="text-center my-3">Order Your Favourite Dish</h1>
            <hr />
            <div className="container d-flex justify-content-around">
                <div className="menu-item">
                    <button className="btn btn-md btn-warning" onClick={() => filterItem('morning')}>Morning</button>
                </div>
                <div className="menu-item">
                    <button className="btn btn-md btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>
                </div>
                <div className="menu-item">
                    <button className="btn btn-md btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
                </div>
                <div className="menu-item">
                    <button className="btn btn-md btn-warning" onClick={() => filterItem('evening')}>Evening</button>
                </div>
                <div className="menu-item">
                    <button className="btn btn-md btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
                </div>
                <div className="menu-item">
                    <button className="btn btn-md btn-warning" onClick={() => setMenuItem(MenuData)}>All</button>
                </div>
            </div>

            <div className=" container-fluid mt-5 my-5">
                <div className="row">
                    <div className="col-10 mx-auto mt-5">
                        <div className="row gy-5  container-fluid">
                            {
                                menuItem.map((elem) => {
                                    return (
                                        <div className="col-4" key={elem.id}>
                                            <div className="row bk-card">
                                                <div className="col-4">
                                                    <img src={elem.image} alt={elem.name} width="150px" height="150px" />
                                                </div>
                                                <div className="card-body col-8">
                                                    <h5 className="card-title">{elem.name}</h5>
                                                    <p className="card-text">{elem.description}</p>
                                                    <div className="row">
                                                        <div className="col-6 price">{elem.price}</div>
                                                        <div className="col-6">
                                                            <button className="btn btn-sm btn-custom">Order Now</button>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <p>*Prices may very as selected date.</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu
