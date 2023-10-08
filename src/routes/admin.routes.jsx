import { Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Edit } from "../pages/Edit"
import { DisheDetails } from "../pages/DisheDetails"

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/details" element={<DisheDetails />} />
    </Routes>
  )
}