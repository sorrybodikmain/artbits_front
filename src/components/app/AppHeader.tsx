import {FC} from 'react'
import {changeTheme, Navbar, Switch, Text, useTheme} from '@nextui-org/react'
import {Link, useLocation} from 'react-router-dom'
import {SiCoinmarketcap} from 'react-icons/si'
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import LoginModal from '@/components/auth/LoginModal'

const AppHeader: FC = () => {
	const {isDark} = useTheme()
	const location = useLocation()

	const routes = [
		{
			name: 'Marketplace',
			href: '/marketplace'
		},
		{
			name: 'Rankings',
			href: '/rankings'
		}, {
			name: 'Connect a wallet',
			href: '/wallet'
		}]

	const handleChange = () => {
		const nextTheme = isDark ? 'light' : 'dark'
		window.localStorage.setItem('data-theme', nextTheme)
		changeTheme(nextTheme)
	}
	const checkActive = (href: string) => location.pathname === href


	return <Navbar isBordered variant='sticky'>
		<Navbar.Brand>
			<SiCoinmarketcap className='mr-2 text-3xl sm:text-md'/>
			<Text b color='default' hideIn='xs'>
				<Link to='/'>
					ArtBits
				</Link>
			</Text>
		</Navbar.Brand>
		<Navbar.Content
			enableCursorHighlight
			activeColor='secondary'
			hideIn='xs'
			variant='underline'
		>
			{routes.map(value =>
				<Navbar.Link
					key={value.href}
					isActive={checkActive(value.href)}
					href={value.href}
				> {value.name}
				</Navbar.Link
				>
			)}

		</Navbar.Content>
		<Navbar.Content>
			<Switch
				checked={isDark}
				onChange={handleChange}
				iconOn={<BsSunFill/>}
				iconOff={<BsMoonFill/>}
			/>
			<Navbar.Item>
				<LoginModal/>
			</Navbar.Item>
		</Navbar.Content>
	</Navbar>

}

export default AppHeader

