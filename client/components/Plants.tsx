import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchPlants } from '../actions/plants'
import AddPlant from './AddPlant'
import { Plant } from './Plant'

function Plants() {
  const plants = useAppSelector((state) => state.plants)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPlants()).catch((err) => {
      console.error(err.message)
    })
  }, [dispatch])

  console.log(plants)

  return (
    <>
     
      <AddPlant />
      <section className="plant-list-main">
        {plants &&
          plants.map((pl, i) => (
            <Plant
              key={i}
              name={pl.name}
              id={pl.id}
              species={pl.species}
              image={pl.image}
              extID={pl.extID}
            />
          ))}
      </section>
    </>
  )
}

export default Plants
