const Section = ({ styles, src, title }) => {
    return (
        <div className={styles}>
            <img src={src} alt={src} />
            <span>{title}</span>
        </div>
    )
}

export default Section; 