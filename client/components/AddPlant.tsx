import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addAPlant } from '../actions/plants'
import { ChangeEvent, useState, FormEvent, useEffect } from 'react'
import { fetchExtPlants } from '../actions/extplants'

interface newPlant {
  extId: number
  name: string
  species: string
}

function AddPlant() {
  const dispatch = useAppDispatch()
  const [newPlant, setNewPlant] = useState({
    extId: 0,
    name: '',
    species: '',
  } as newPlant)
  const [viewForm, setViewForm] = useState(false)
  const extplants = useAppSelector((state) => state.extplants)

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
    const newState = { ...newPlant, [key]: e.target.value, extId: extId }
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
            />

            <label htmlFor="species">Species</label>
            <select id="species" name="species" onChange={handleChange}>
              {extplants.map((plant) => (
                <option
                  key={plant.id}
                  value={plant.common_name}
                  data-image={plant.image}
                >
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
