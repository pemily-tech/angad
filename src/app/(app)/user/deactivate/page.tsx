'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

import Spinner from '../../../../ui/shared/spinner';

const Login = dynamic(() => import('./ui/login'), {
	loading: () => <Spinner />,
});

const Otp = dynamic(() => import('./ui/otp'), {
	loading: () => <Spinner />,
});

const Deactivate = dynamic(() => import('./ui/deactivate'), {
	loading: () => <Spinner />,
});

export default function Page() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());
	const { stage } = params;

	return (
		<div className="container h-screen pt-[72px]">
			{!stage && <Login />}
			{stage === '1' && <Otp />}
			{stage === '2' && <Deactivate />}
		</div>
	);
}
