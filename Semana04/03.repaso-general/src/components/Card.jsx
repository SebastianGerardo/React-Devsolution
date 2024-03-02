import PropTypes from 'prop-types'

const Card = ({ data }) => {

  return (
    <section className='grid grid-cols-[230px_auto] w-full max-w-[600px] max-h-[220px] bg-[#3c3e44] text-[#F5F5F5] rounded-lg'>
      <div className='w-full max-h-[220px]'>
        <img src={data.image} alt="" className='w-full h-full object-cover rounded-l-lg' />
      </div>
      <div className='p-[13.5px] flex flex-col gap-2'>
        <div>
          <a target='_blank' href={data.url} className='text-[27px] font-extrabold hover:text-[#FF9800] line-clamp-1'>{data.name}</a>
          <span className='flex gap-1 text-base font-medium'>
            <div className='flex gap-1 items-center'>
              <div className={`${data.status === "Alive" ? "bg-green-500" : "bg-red-500"} w-3 h-3 rounded-full`} />
              {data.status}
            </div>
            <p>
              - {data.species}
            </p>
          </span>
        </div>
        <div>
          <h2 className='text-[#9e9e9e] text-base font-medium'>Last known location:</h2>
          <p>{data.location.name}</p>
        </div>
        <div>
          <h2 className='text-[#9e9e9e] text-base font-medium'>First seen in:</h2>
          <p>{data.origin.name}</p>
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card
