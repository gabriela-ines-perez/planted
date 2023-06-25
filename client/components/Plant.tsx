import { Plant as Props } from '../models/plants'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { deletePlant } from '../actions/plants'
import { fetchAnExtPlants } from '../actions/extplants'
import { ExtPlantData } from '../models/extplants'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

export function Plant(props: Props) {
  const dispatch = useAppDispatch()
  const id = props.id as number
  const extplant = useAppSelector((state) => state.extplants) as ExtPlantData
  const extID = props.extId
  const [viewLearnMore, setViewLearnMore] = useState(false)

  const handleClick = () => {
    dispatch(deletePlant(id))
    console.log('handleclick', id)
  }

  const handleLearnClick = () => {
    setViewLearnMore(!viewLearnMore)
    dispatch(fetchAnExtPlants(extID))
    console.log(extID)
  } //dispatch find plant by id useing props.species

  return (
    <>
      <div className="plant-card" key={props.id}>
        <img
          className="plant-image"
          src={`./images/${props.image}`}
          alt={props.species}
        />
        <button className="delete-button" onClick={handleClick}>
          ×
        </button>
        <h3>{props.name}</h3>
        <p>
          <em>{props.species}</em>
        </p>

        <button onClick={handleLearnClick}>Learn more</button>
        {viewLearnMore && (
          <div className="learn-more-box">
            <p>Name: {extplant.common_name}</p>
            <p>Watering: {extplant.watering}</p>
            <p>Scientific Name: {extplant.scientific_name}</p>
            <p>Sunlight: {extplant.sunlight}</p>
          </div>
        )}
      </div>
    </>
  )
}
