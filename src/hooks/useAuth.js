import { useContext } from "react"
import GeneralContext from "../context/GeneralContext"

export const useAuth = () => {
	const context = useContext(GeneralContext)
	if(!context) throw new Error('There is no auth provider')

	const { login, signup, logout, loginWithGoogle, resetPassword, user, loading } = context

	return { login, signup, logout, loginWithGoogle, resetPassword, user, loading }
}