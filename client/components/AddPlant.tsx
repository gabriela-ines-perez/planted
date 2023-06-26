import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addAPlant } from '../actions/plants'
import { ChangeEvent, useState, FormEvent, useEffect } from 'react'
import { fetchExtPlants } from '../actions/extplants'
import { ExtPlantData } from '../models/extplants'
import { NewPlant } from '../models/plants'

function AddPlant() {
  const dispatch = useAppDispatch()
  const [newPlant, setNewPlant] = useState([] as NewPlant[] | null)
  const [viewForm, setViewForm] = useState(false)
  const extplants = useAppSelector((state) => state.extplants) as ExtPlantData[]

  useEffect(() => {
    dispatch(fetchExtPlants()).catch((err) => {
      console.error(err.message)
    })
  }, [dispatch])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const key = e.target.id
    const selectedPlant = extplants.find(
      (plant) => plant.common_name === e.target.value
    )
    const extId = selectedPlant ? selectedPlant.id : 0
    const newState = {
      ...newPlant,
      [key]: e.target.value,
      extId: extId,
    } as newPlant
    setNewPlant(newState)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(addAPlant(newPlant))
    setNewPlant({ name: '', species: '', extId: 0 })
  }

  const handleClick = () => {
    setViewForm(!viewForm)
  }

  return (
    <>
      <section className="add-plant">
        <h2>Get started by adding your plant!</h2>
        <button className="add-button" onClick={handleClick}>
          {viewForm ? '-' : '+'}
        </button>
        {viewForm && (
          <form className="add-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newPlant.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="species">Species</label>
            <select
              id="species"
              name="species"
              onChange={handleChange}
              required
            >
              <option disabled>Select a house plant:</option>
              <option>---</option>
              {extplants.map((plant) => (
                <option key={plant.id} value={plant.common_name}>
                  {plant.common_name}
                </option>
              ))}
            </select>
            <button>Add Plant</button>
          </form>
        )}
      </section>
    </>
  )
}

export default AddPlant
