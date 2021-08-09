import {Link} from 'react-router-dom'

export default function Header(props) {

    return (<div>
        <Link to="/">
        <button type="button">
        Home!
        </button>
        
    </Link>
        <Link to="/narwhal">
        <button type="button">
        narwhal!
        </button>
        
    </Link>
    <Link to="/whale">
        <button type="button">
            whale!
        </button>
        
    </Link>
    <Link to="/manatee">
        <button type="button">
        manatee!
        </button>
        
    </Link>
    </div>);
}