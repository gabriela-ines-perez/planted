// import { useAppSelector, useAppDispatch } from '../hooks/hooks'
// import { useEffect } from 'react'
// import { fetchExtPlants } from '../actions/extplants'

// interface Props{
//   value: string
  
// }

// export function SpeciesDropDown(Props as props) {
//   const extplants = useAppSelector((state) => state.extplants)
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     dispatch(fetchExtPlants()).catch((err) => {
//       console.error(err.message)
//     })
//   }, [])
//   return (
//     <>
//       <label htmlFor="species">Species</label>
//       <select
//         id="species"
//         name="species"
//         value={newPlant.species}
//         onChange={handleChange}
//       >
//         {extplants.map((plant) => (
//           <option key={plant.id} value={plant.common_name}>
//             {plant.common_name}
//           </option>
//         ))}
//       </select>
//     </>
//   )
// }
