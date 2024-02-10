import PropTypes from 'prop-types'
import './Card.css'

function Card ({ data }) {
  return (
    <section className='card'>
      <picture className='card-header'>
        <img src={data.flags.svg} alt="" />
      </picture>
      <div className='card-body'>
        <h1>{data.name.common}</h1>
        <ul className='card-description'>
          <li>
            Population: {data.population}
          </li>
          <li>
            Region: {data.region}
          </li>
          <li>
            Capital: {data.capital}
          </li>
        </ul>
      </div>
    </section>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card