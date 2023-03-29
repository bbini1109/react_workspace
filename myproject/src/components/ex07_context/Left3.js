import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const Left3 = () =>{
//Left2의 자식으로 사용함
    const {number} = useContext(ThemeContext);

    return (
        <div>
            <h1>Left3 : </h1>
            <h1>Number : {number}</h1>
        </div>
    )
};

export default Left3;