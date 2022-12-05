import React from "react";
import { ItemContainer } from "./style";

function ItemRepo() {
    return(
        <ItemContainer>
            <h3> Hudson </h3>
            <p>dio/Hudson</p>
            <a href="#">Ver repositório</a> <br/>
            <a href="#" className="remove">Remove</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo