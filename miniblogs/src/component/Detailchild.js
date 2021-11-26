import React from "react";
import { useParams } from "react-router";
import Detail from "./Detail";

const Detailchild = (props) => {
    let { id } = useParams();
    return (
        <Detail id={id} />
    );
}


export default Detailchild