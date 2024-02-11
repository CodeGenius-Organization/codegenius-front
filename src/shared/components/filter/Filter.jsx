import React from "react";

import './Filter.css'
import { IoSearchOutline } from "react-icons/io5";

function Filters() {
    
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
                    <select className="select-filter" name="" id="">
                        <option className="item-filter" value="0">Nenhum</option>
                        <option className="item-filter" value="1">Avaliação</option>
                        <option className="item-filter" value="2">Alfabética (A a Z)</option>
                        <option className="item-filter" value="3">Alfabética (Z a A)</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filters