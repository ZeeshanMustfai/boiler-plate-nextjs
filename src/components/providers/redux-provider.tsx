'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore } from '@/lib/store'

type Props = {
  children: React.ReactNode
}

const ReduxProvider = ({ children }: Props) => {
  const { store, persistor } = makeStore()

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className='flex items-center justify-center h-96'>
            loading...
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
