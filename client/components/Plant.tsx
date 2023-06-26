import { Plant as Props } from '../models/plants'
import { useAppDispatch } from '../hooks/hooks'
import { deletePlant } from '../actions/plants'
import { Link } from 'react-router-dom'

export function Plant(props: Props) {
  const dispatch = useAppDispatch()
  const id = props.id as number

  const handleClick = () => {
    dispatch(deletePlant(id))
  }

  return (
    <>
      <div className="plant-card" key={props.id}>
        {props.image ? (
          <img
            className="plant-image"
            src={`./images/${props.image}`}
            alt={`a potted ${props.species}`}
          />
        ) : (
          <img
            className="plant-image"
            src={`./images/default.png`}
            alt={`monserta icson for empty state`}
          />
        )}
        <button className="delete-button" onClick={handleClick}>
          ×
        </button>
        <h3>{props.name}</h3>
        <p>
          <em>{props.species}</em>
        </p>

        <Link to={`plant/${props.id}/${props.extID}`}>
          <p className="learn-more-button">Learn more</p>
        </Link>
      </div>
    </>
  )
}
