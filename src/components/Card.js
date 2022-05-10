export default function Card(props) {
  return (
      <>
        <div
          onClick={(event) => props.showInfo(event, props.id)}
          className={`card  ${props.shop ? `shop` : ``} `}
        >
          <img className='card--img' src={props.img} alt={props.imgAlt} />
          <h2 className='card--title'>{props.title}</h2>
          <p className='card--date'>{props.date}</p>
        </div>
      </>
    )
  }
  