import { ButtonStyle } from "./style";
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <ButtonStyle>
        <Link to='signup'>
            <button className='btn'>Como funciona?</button>
        </Link>
        </ButtonStyle>
    )
}