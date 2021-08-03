import React from 'react'

export const MenuList = ({menuItem}) => {
    return (
        <>
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
        </>
    )
}
