import { FC } from 'react'
import Box from "@/components/Box";

type Props = { children: JSX.Element | JSX.Element[] }
const Layout: FC<Props> = ({ children }) => {
	return <Box css={{ maxW: '100%' }}>{children}</Box>
}

export default Layout
