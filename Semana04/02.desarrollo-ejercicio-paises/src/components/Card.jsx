import PropTypes from 'prop-types'

const Card = ({ data }) => {

  return (
    <div>
      <div>
        <img src={data.flags.svg} alt={data.flags.alt} />
      </div>
      <div>
        <h1>{data.name.common}</h1>
        <ul>
          <li>Population: {data.population}</li>
          <li>Region: {data.region}</li>
          <li>Capital: {data?.capital?.map(capital => (
              <p key={capital}>{capital}</p>
            ))}
          </li>
        </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card
