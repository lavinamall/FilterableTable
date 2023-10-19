import React from 'react'

function Searchbar({ filterText, setInStockOnly, setFilterText, inStockOnly }) {

    return (
        <div>
            <form action="">
                <input type='text'
                    value={filterText}
                    onChange={(e) => { setFilterText(e.target.value) }}
                    placeholder='Search text...'
                    style={{ width: '100%', padding: '4px', fontSize: '18px' }}></input>

                <div style={{ marginTop: '5px' }}>
                    <input type='checkbox' value={inStockOnly}
                        onChange={(e) => { setInStockOnly(e.target.checked) }}
                    >
                    </input> {" "}
                    <label>Show only products in stock</label>
                </div>
            </form>
        </div>
    )
}

export default Searchbar