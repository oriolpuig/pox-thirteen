import React from 'react'
import Context from '@s-ui/react-context'
import withContext from '@s-ui/hoc/lib/withContext'

export default context => Target => props => {
  const TargetWithDeprecatedContext = withContext(context)(Target)
  return (
    <Context.Provider value={context}>
      <TargetWithDeprecatedContext {...props} />
    </Context.Provider>
  )
}
