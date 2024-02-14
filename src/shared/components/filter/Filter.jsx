import React from "react";

import './Filter.css'
import { IoSearchOutline } from "react-icons/io5";

function Filters({ onChangeFilter }) {

    return (
        <>
            <div className="container-filter">
                <div className="search_section" >
                    <div className="input_icon">
                            <IoSearchOutline className="icon-search"/>
                
                        <input type="text" placeholder="Pesquise aqui"/>
                    </div>
                    <button>Buscar</button>
                </div>
                <div className="filter_section">
                    <span>Filtrar por:</span>
                    <select className="select-filter" onChange={(e) => {    
                        onChangeFilter(e.target.value)
                    }}>
                        <option className="item-filter" value="none">Nenhum</option>
                        <option className="item-filter" value="asc">Alfabética (A a Z)</option>
                        <option className="item-filter" value="desc">Alfabética (Z a A)</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filters