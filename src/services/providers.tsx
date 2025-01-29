'use client';

import React, { type ReactNode } from 'react';

import { Toaster } from '@/ui/shared/toast';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<Toaster />
		</>
	);
}
