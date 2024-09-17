import React, { useReducer, useEffect, useState } from "react"
import GeneralContext from "./GeneralContext";
import GeneralReducer from "./GeneralReducer";
import axios from "axios";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail,
	getAuth
} from 'firebase/auth';

import app from "../components/firebase/Firebase";

const initialState = {
	user: null,
	pokemons: [],
	selectedPokemon: null,
	team: [],
	theme: "light" // light theme por defecto
}

const auth = getAuth(app)

const GeneralState = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [state, dispatch] = useReducer(GeneralReducer, initialState);

	// AUTH FUNCTIONS
	const getUser = async () => {
		const userStorage = await localStorage.getItem('user');
		if (userStorage) {
			dispatch({
				type: 'SET_USER',
				payload: JSON.parse(userStorage)
			})
		}
	}

	const setUser = async (user) => {

		dispatch({
			type: 'SET_USER',
			payload: user
		})

	}

	const login = (email, password) => {
		console.log(email, password);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const logout = () => {
		signOut(auth);
	}

	const loginWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	}

	const resetPassword = (email) => {
		return sendPasswordResetEmail(auth, email);
	}

	// THEME FUNCTIONS
	const getTheme = async () => {
		const themeStorage = await localStorage.getItem('theme');
		if (themeStorage) {
			themeStorage==='dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
			dispatch({
				type: 'SET_THEME',
				payload: themeStorage
			})
		}
	}

	const changeTheme = async (theme) => {
		localStorage.setItem('theme', theme);
		if (localStorage.theme === 'dark' || !('theme' in localStorage) || theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		dispatch({
			type: 'CHANGE_THEME',
			payload: theme
		})
	}

	// POKEMON FUNCTIONS
	const getPokemonList = async () => {
		const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
		dispatch({
			type: 'GET_POKEMON_LIST',
			payload: res.data.results
		})
	}

	const getTeamFromStorage = async () => {
		const storageTeam = localStorage.getItem('team');
		if (storageTeam) {
			const team = JSON.parse(storageTeam);

			dispatch({
				type: 'ADD_TEAM',
				payload: team
			})
		}
	}

	const getPokemon = async (url) => {
		const res = await axios.get(url)
		return res.data
	}

	const addToTeam = async (pokemon) => {
		const localTeam = localStorage.getItem('team')

		if (!JSON.parse(localTeam)) {
			localStorage.setItem('team', JSON.stringify([pokemon]))
		} else {
			const newTeam = [...JSON.parse(localTeam), pokemon]
			localStorage.setItem('team', JSON.stringify(newTeam))
		}

		dispatch({
			type: 'ADD_POKEMON',
			payload: pokemon
		})
	}

	const removeFromTeam = async (name) => {
		const newTeam = state.team.filter(pokemon => pokemon.name !== name)
		localStorage.setItem('team', JSON.stringify(newTeam))

		dispatch({
			type: 'REMOVE_POKEMON',
			payload: newTeam
		})
	}

	useEffect(() => {
		getUser();
		getPokemonList();
		getTeamFromStorage();
		getTheme();

		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, [])

	return (
		<GeneralContext.Provider value={{
			getPokemon,
			addToTeam,
			removeFromTeam,
			pokemons: state.pokemons,
			selectedPokemon: state.selectedPokemon,
			user: state.user,
			team: state.team,
			theme: state.theme,
			changeTheme,
			login,
			loginWithGoogle,
			signup,
			logout,
			resetPassword,
			loading,
		}}>

			{children}

		</GeneralContext.Provider>
	)
}

export default GeneralState;