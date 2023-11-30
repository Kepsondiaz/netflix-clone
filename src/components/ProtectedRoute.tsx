import { ReactNode } from 'react'
import { UserAuth } from '../Authentification/AuthContext'
import { Navigate } from 'react-router-dom'

interface Props {
    children?: ReactNode
}

const ProtectedRoute = ({children}: Props) => {
    const {user} = UserAuth()

  if (!user) {
    return <Navigate to='/login' />;
  } else {
    return children;
  }
}

export default ProtectedRoute