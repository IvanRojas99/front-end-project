import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//container con nav y footer
import Layout from './containers/Layout/Layout';

//protected pages
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TeamPage from './pages/TeamPage/TeamPage';
import ProtectedRoutes from './containers/Protected/ProtectedRoute';
import Loading from './components/loading/Loading';
const HomePage = lazy(async () => {
	const [moduleExports] = await Promise.all([
		import('./pages/HomePage/HomePage'),
		new Promise(resolve => setTimeout(resolve, 500))
	]);
	return moduleExports;
});
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const PokemonPage = lazy(() => import('./pages/PokemonPage/PokemonPage'));

//public pages
const LandingPage = lazy(async () => {
	const [moduleExports] = await Promise.all([
		import('./pages/LandingPage/LandingPage'),
		new Promise(resolve => setTimeout(resolve, 1000))
	]);
	return moduleExports;
});
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const PassResetPage = lazy(() => import('./pages/PassResetPage/PassResetPage'));

function App() {
	return (
		<BrowserRouter>
			<Routes>

				<Route path="/notfound" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate replace to="/notfound" />} />
				<Route path='/' element={<Suspense fallback={<Loading />}><LandingPage /></Suspense>} />
				<Route path='/signup' element={<Suspense fallback={<Loading />}><SignUpPage /></Suspense>} />
				<Route path='/resetpass' element={<Suspense fallback={<Loading />}><PassResetPage /></Suspense>} />

				<Route element={<ProtectedRoutes />}>
					<Route element={<Layout />}>
						<Route path='home' element={<Suspense fallback={<Loading />}><HomePage /></Suspense>} />
						<Route path='profile' element={<ProfilePage />} />
						<Route path='team' element={<TeamPage />} />
						<Route path='pokemon/:name' element={<Suspense fallback={<Loading />}><PokemonPage /></Suspense>} />
					</Route>
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
