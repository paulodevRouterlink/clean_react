import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './private-route'

describe('PrivateRoutes', () => {
  test.skip('Should redirect to /signin if token is empty ', () => {
    const badRoute = '/survey-list'

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="users" element={<div />}>
            <PrivateRoute />
          </Route>
        </Routes>
      </MemoryRouter>,
    )
  })
})
