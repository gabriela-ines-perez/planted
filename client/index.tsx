import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})


// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import router from './router'

// document.addEventListener('DOMContentLoaded', () => {
//   createRoot(document.getElementById('app') as HTMLElement).render(
//     <RouterProvider router={router} />
//   )
// })