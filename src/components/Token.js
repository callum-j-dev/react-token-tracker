//import { useState } from 'react';
import Button from "./Button";

const Token = ({ token, onTap, onUntap, onAdd, onRemove }) => {
    // const [untapped, setUntapped] = useState(0);
    // const [tapped, setTapped] = useState(0);

    // Click events for tapping/untapping
    // const tapToken = () => {
    //     setTapped(tapped + 1);
    //     setUntapped(untapped - 1);
    // }

    // const untapToken = () => {
    //     setTapped(tapped - 1);
    //     setUntapped(untapped + 1);
    // }

    // const addToken = () => {
    //     setUntapped(untapped + 1);
    // }

    // const removeToken = () => {
    //     setTapped(tapped - 1);
    // }

    // const untapAll = () => {
    //     setUntapped(untapped + tapped);
    //     setTapped(0);
    // }

    // const clearAll = () => {
    //     setUntapped(0);
    //     setTapped(0);
    // }

    return (
        <div style={{ backgroundColor: token.color }} className='token container' >
            <Button buttonType="add-remove" text="+" color="red" textColor="white" onClick={() => {onAdd(token.id)}}/>
            <h3>{token.name}</h3>
            <h4 className="untapped" onClick={() => {onTap(token.id)}}>{token.untapped}</h4>
            <h5 className="tapped" onClick={() => {onUntap(token.id)}}>{token.tapped}</h5>
            <Button buttonType="add-remove" text="-" color="blue" textColor="white" onClick={() => {onRemove(token.id)}}/>
        </div>
    )
}

Token.defaultProps = {
    color: "lavendar",
    untapped: 0,
    tapped: 0
}

export default Token