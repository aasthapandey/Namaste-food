import { useState } from "react";

const User = ({ name }) => {
    const [ count, setCount ] = useState(0);
    const [ count2, setCount2 ] = useState(1);
    return (
        <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <h3>Location: Gurgaon</h3>
        <h3>Contact: @aasthapandey</h3>
        </div>
    );
}

export default User;