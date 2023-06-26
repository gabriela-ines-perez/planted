import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import SinglePlant from './components/SinglePlant'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="plant/:id/:extID" element={<SinglePlant />}></Route>
    </Route>
  )
)

export default router
