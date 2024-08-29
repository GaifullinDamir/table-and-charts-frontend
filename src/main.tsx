import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '.'
import { setupStore } from './store/store'
import { Provider } from 'react-redux';

const store = setupStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
