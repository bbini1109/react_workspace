import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Left2 from "./Left2";

const Left1 = () => {

    const {name, onHandleName} = useContext(UserContext)
    return <div>
        <h1>Left1</h1>
        <h1>name: {name}</h1>
        <button onClick={() => onHandleName()}>NameClick</button>
        <Left2 />
        </div>;

};

export default Left1;