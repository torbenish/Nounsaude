import { ButtonStyle } from "./style";
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <ButtonStyle>
        <Link to='signup'>
            <button className='btn'>Sign up</button>
        </Link>
        </ButtonStyle>
    )
}
