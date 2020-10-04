import { node } from 'prop-types'

import Header from '../components/Header'

const Main = ({ children }) => (
  <>
    <Header />
    <main>
      { children }
    </main>
  </>
)

export default Main