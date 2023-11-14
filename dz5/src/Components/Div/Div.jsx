import './Div.scss'
export default function Div(props) {
    return (
        <div className='div'>

            <div className={props.className1 + " title"} >
                <p >Unlimited {props.title}</p>
            </div>

            <div className={props.className2 + " price"} >
                <p className="price_content">
                    <sub className='top_sub'>rub</sub>
                    {props.title}
                    <sub>/month</sub>
                </p>
            </div>

            <div className="speed">
                <p className="speed_content">up to {props.speed}mbps</p>
            </div>

            <div className="description">
                <p>the volume of included traffic is not limited</p>
            </div>
        </div>
    )
}
