import {createTheme, getDocumentTheme, NextUIProvider} from '@nextui-org/react'
import React, {useEffect, useState} from 'react'
import Layout from './components/Layout'
import AppHeader from '@/components/app/AppHeader'
import AppRouter from "./routes/AppRouter";
import AppFooter from "@/components/app/AppFooter";

const lightTheme = createTheme({
	type: 'light'
})
const darkTheme = createTheme({
	type: 'dark'
})

export const App = () => {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const theme = window.localStorage.getItem('data-theme')
		setIsDark(theme === 'dark')
		const observer = new MutationObserver(() => {
			const newTheme = getDocumentTheme(document?.documentElement)
			setIsDark(newTheme === 'dark')
		})
		observer.observe(document?.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme', 'style']
		})
		return () => observer.disconnect()
	}, [])

	return (
		<NextUIProvider theme={isDark ? darkTheme : lightTheme}>
			<Layout>
				<AppHeader/>
				<AppRouter/>
				<AppFooter/>
			</Layout>
		</NextUIProvider>
	)
}

export default App
