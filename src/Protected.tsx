import type {ReactNode} from 'react'
import { Navigate} from 'react-router-dom'
import { useAppSlector } from './App/Store/Hooks'


type ProtectedProps={
    children: ReactNode
}

function Protected({children}:ProtectedProps) {

    const isAuth=useAppSlector((state:any)=>state.auth.isAuthenticated)

    return isAuth ? children : <Navigate to='/Login'/>

            
}
export default Protected
