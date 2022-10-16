import { Box, Container, Heading } from '@chakra-ui/react'

export default function Home() {
	return (
		<Container display="flex" justifyContent="center" alignItems="center">
			<Box
				w="100%"
				h="100px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				bg="red"
				borderRadius="5px"
			>
				<Heading color="white">Application Contact</Heading>
			</Box>
		</Container>
	)
}
