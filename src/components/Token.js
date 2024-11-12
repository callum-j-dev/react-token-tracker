import { useState } from 'react';
import Button from "./Button";

const Token = ({ name, color }) => {
    const [untapped, setUntapped] = useState(0);
    const [tapped, setTapped] = useState(0);

    // Click events for tapping/untapping
    const tapToken = () => {
        setTapped(tapped + 1);
        setUntapped(untapped - 1);
    }

    const untapToken = () => {
        setTapped(tapped - 1);
        setUntapped(untapped + 1);
    }

    const addToken = () => {
        setUntapped(untapped + 1);
    }

    const removeToken = () => {
        setTapped(tapped - 1);
    }

    const untapAll = () => {
        setUntapped(untapped + tapped);
        setTapped(0);
    }

    const clearAll = () => {
        setUntapped(0);
        setTapped(0);
    }

    return (
        <div style={{ backgroundColor: color }} className='token container' >
            <Button text="+" color="red" textColor="white" />
            <h3>{name}</h3>
            <h4>{untapped}</h4>
            <h5>{tapped}</h5>
            <Button text="-" color="blue" textColor="white" />
        </div>
    )
}

export default Token