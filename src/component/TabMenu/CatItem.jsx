import React from 'react'

const CatItem = ({ filterItem, catList }) => {
    return (
        <>
            <div className="container d-flex justify-content-around">
                {
                    catList.map((e, i) => {
                        return (
                            <div className="menu-item" key={i}>
                                <button className="btn btn-md btn-warning" onClick={() => filterItem(e)}>{e}</button>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default CatItem
