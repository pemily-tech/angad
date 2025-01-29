import { type PropsWithChildren } from 'react';

import { Footer, Header } from '../../ui/components/layout';

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	);
};

export default RootLayout;
