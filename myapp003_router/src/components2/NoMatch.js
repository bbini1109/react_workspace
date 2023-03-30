import { Link } from "react-router-dom";


const NoMatch = () => {

    return (
        <div>
            <h2>NoMatch</h2>
            {/* Link는 단순한 페이지 이동 */}
            <Link to="/"> go to home </Link>
        </div>
    )

};

export default NoMatch;