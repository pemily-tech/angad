'use server';

import { z } from 'zod';

import { safeActionClient } from '../services/next-safe-actions';

const schema = z.object({
	mobileNumber: z
		.string()
		.regex(/^[6-9]\d{9}$/, 'Please enter a valid mobile number')
		.refine((num) => num.length === 10, {
			message: 'Mobile number must be exactly 10 digits',
		}),
	reason: z.string().min(1, 'Reason is required'),
	token: z.string(),
});

const deactivateUserAction = safeActionClient
	.schema(schema)
	.action(async ({ parsedInput }) => {
		const { mobileNumber, reason, token } = parsedInput;

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BASE_PATH}/user/deactivate`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						mobile: Number(mobileNumber),
						deactivateReason: reason,
					}),
				}
			);

			if (!response.ok) {
				return {
					status: 'ERROR',
					msg: 'Failed to check user registration.',
					data: null,
					statusCode: response.status,
				};
			}
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
			return {
				status: 'ERROR',
				msg: 'A network error occurred. Please check your connection and try again.',
				data: null,
				statusCode: 500,
			};
		}
	});

export { deactivateUserAction };
