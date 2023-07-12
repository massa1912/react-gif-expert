import PropTypes from 'prop-types'
    
export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
}

GifItem.defaultProps = {
  title: 'No hay titulo',
  url: 'No hay url',
}
    