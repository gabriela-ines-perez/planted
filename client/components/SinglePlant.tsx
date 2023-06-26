import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import { ExtPlantData } from '../models/extplants'
import { useEffect } from 'react'
import { fetchAnExtPlants } from '../actions/extplants'
import { useParams } from 'react-router-dom'
import { fetchAPlant } from '../actions/plants'

export default function SinglePlant() {
  const extplant = useAppSelector((state) => state.extplants) as ExtPlantData
  const plant = useAppSelector((state) => state.plants[0])
  const dispatch = useAppDispatch()
  const { id, extID } = useParams()
  const extImage = extplant.default_image
    ? extplant.default_image.original_url
    : '../../public/images/default.png'

  useEffect(() => {
    const extIdNum = Number(extID)
    dispatch(fetchAnExtPlants(extIdNum)).catch((err) => {
      console.error(err.message)
    })
  }, [dispatch, extID])

  useEffect(() => {
    const idNum = Number(id)
    dispatch(fetchAPlant(idNum)).catch((err) => {
      console.error(err.message)
    })
  }, [dispatch, id])

  return (
    <>
      <div className="learn-more">
        {plant.image ? (
          <img
            className="plant-image"
            src={`../../public/images/${plant.image}`}
            alt={plant.species}
          />
        ) : (
          <img
            className="plant-image"
            src="../../public/images/default.png"
            alt="plant"
          />
        )}
        <h2>{plant.name}</h2>
        {extImage && <img src={extImage} alt={plant.name} />}
        <h3>
          {' '}
          <em>
            {extplant.common_name
              ? extplant.common_name
              : 'No data on this plant'}
          </em>
        </h3>
        <p>
          Watering:
          {extplant.watering ? extplant.watering : 'No data on this plant'}
        </p>
        <p>
          Scientific Name:
          {extplant.scientific_name
            ? extplant.scientific_name
            : 'No data on this plant'}
        </p>
        <p>
          Sunlight:
          {extplant.sunlight ? extplant.sunlight : 'No data on this plant'}
        </p>
        <p>
          Description:
          {extplant.description
            ? extplant.description
            : 'No data on this plant'}
        </p>
        <Link to={'/'}>
          <button>Home</button>
        </Link>
      </div>
    </>
  )
}
