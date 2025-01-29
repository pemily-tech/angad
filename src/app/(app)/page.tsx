import dynamic from 'next/dynamic';

import Hero from '../../ui/components/home/hero';
import Spinner from '../../ui/shared/spinner';

const Booking = dynamic(() => import('../../ui/components/home/booking'), {
	loading: () => <Spinner />,
});
const Why = dynamic(() => import('../../ui/components/home/why'), {
	loading: () => <Spinner />,
});
const Features = dynamic(() => import('../../ui/components/home/features'), {
	loading: () => <Spinner />,
});
const Contact = dynamic(() => import('../../ui/components/home/contact'), {
	loading: () => <Spinner />,
});
const Services = dynamic(() => import('../../ui/components/home/services'), {
	loading: () => <Spinner />,
});

export default function Page() {
	return (
		<div>
			<Hero />
			<Services />
			<Why />
			<Booking />
			<Features />
			<Contact />
		</div>
	);
}
