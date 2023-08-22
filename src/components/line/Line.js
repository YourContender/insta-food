import { Link } from 'react-router-dom';
import './Line.scss';
import { useEffect, useState } from 'react';

const Line = ({category}) => {
    const [secondLink, setSecondLink] = useState('');

    useEffect(() => {
        switch(category) {
            case 'burgers':
                return setSecondLink('Бургери')
        }
    })

    return (
        <div className="line">
            <div className="line_container">
                <Link to='/'>Головна</Link>
                {
                    secondLink ? <Link to={'/' + category}>{secondLink}</Link> : null
                }
            </div>
        </div>
    )
}

export default Line;