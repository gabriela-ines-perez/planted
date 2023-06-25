import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Home />} />
      <Route path="continents/:name" element={<Continent />}></Route>
      <Route path="continents/:name/:code" element={<Country />}></Route> */}
    </Route>
  )
)

export default router
