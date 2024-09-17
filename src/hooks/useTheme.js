import { useContext } from "react";
import GeneralContext from "../context/GeneralContext"

const useTheme = () => {
	const context = useContext(GeneralContext)
	if(!context) throw new Error('There is no auth provider')

	const { theme, changeTheme } = context;

	return { theme, changeTheme }
}

export default useTheme