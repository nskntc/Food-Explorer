import { BrowserRouter } from "react-router-dom";

import { CommonRoutes } from "./common.routes"
import { AdminRoutes } from "./admin.routes"
import { AuthRoutes } from "./auth.routes"

import { useAuth } from "../hooks/auth";

export const Routes = () => {
  const { user } = useAuth()

  const AccessRoute = () => {
    if(user.roles === "admin") return <AdminRoutes />
    return <CommonRoutes />
  }

  return (
    <BrowserRouter>
      { user ? <AccessRoute /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}