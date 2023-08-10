import { Link } from 'react-router-dom';

const Section = ({ styles, src, title, link }) => {
    return (
        <Link to={link}>
            <div className={styles}>
                <img src={src} alt={src} />
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default Section; 