import './index.scss'

const ZoomImage = (props) => {
    const imageStyle = {
        backgroundImage: `url(${props.url})`
    }
    return (
        <>
            <div className="zoom-image" style={imageStyle}></div>
        </>
    )
}

export default ZoomImage