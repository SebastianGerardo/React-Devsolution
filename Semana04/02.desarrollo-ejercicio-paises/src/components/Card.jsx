import PropTypes from 'prop-types'

const Card = ({ data }) => {

  return (
    <div className='w-full shadow-sm rounded-sm bg-white'>
      <div className='w-full h-48'>
        <img className='w-full h-full object-cover ' src={data.flags.svg} alt={data.flags.alt} />
      </div>
      <div className='p-6'>
        <h1 className='py-4 font-bold text-xl tracking-[.2px]'>{data.name.common}</h1>
        <ul>
          <li><strong>Population:</strong> {data.population}</li>
          <li><strong>Region:</strong> {data.region}</li>
          <li className='flex gap-1'>
            <strong>Capital:</strong> {data?.capital?.map(capital => (
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
