import { Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home"
import { DisheDetails } from "../pages/DisheDetails"

export const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<DisheDetails />} />
    </Routes>
  )
}