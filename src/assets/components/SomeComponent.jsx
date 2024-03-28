import { useContext } from 'react'

import SomeContext from './SomeContext'

function SomeComponent() {
  const someValue = useContext(SomeContext)

  return <div>{someValue}</div>
}

export default SomeComponent
