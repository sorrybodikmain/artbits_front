import { Grid } from '@nextui-org/react'
import NftCard from '@/components/nft/NftCard'

const ProductList = () => {
	const list = [
		{
			title: 'Orange',
			img: '/images/fruit-1.jpeg',
			price: '$5.50'
		},
		{
			title: 'Tangerine',
			img: '/images/fruit-2.jpeg',
			price: '$3.00'
		},
		{
			title: 'Cherry',
			img: '/images/fruit-3.jpeg',
			price: '$10.00'
		},
		{
			title: 'Lemon',
			img: '/images/fruit-4.jpeg',
			price: '$5.30'
		},
		{
			title: 'Avocado',
			img: '/images/fruit-5.jpeg',
			price: '$15.70'
		},
		{
			title: 'Lemon 2',
			img: '/images/fruit-6.jpeg',
			price: '$8.00'
		},
		{
			title: 'Banana',
			img: '/images/fruit-7.jpeg',
			price: '$7.50'
		},
		{
			title: 'Watermelon',
			img: '/images/fruit-8.jpeg',
			price: '$12.20'
		}
	]

	return (
		<Grid.Container gap={2} justify='flex-start'>
			{list.map((item, index) =>
				<NftCard data={item} key={index} />
			)}
		</Grid.Container>
	)
}
export default ProductList
