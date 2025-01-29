'use server';

import axios from 'axios';
import { z } from 'zod';

import { safeActionClient } from '../services/next-safe-actions';

interface IPayload {
	name: string;
	mobile: number;
	type: 'Vet Clinic Appointment';
	query?: string;
}

const schema = z.object({
	name: z.string().min(3, 'Name is required'),
	mobileNumber: z
		.string()
		.regex(/^[6-9]\d{9}$/, 'Please enter a valid mobile number')
		.refine((num) => num.length === 10, {
			message: 'Mobile number must be exactly 10 digits',
		}),
	message: z.string().optional(),
});

const contactUsAction = safeActionClient
	.schema(schema)
	.action(async ({ parsedInput }) => {
		const { mobileNumber, name, message } = parsedInput;
		const payload = {
			name,
			mobile: Number(mobileNumber),
			type: 'Vet Clinic Appointment',
			...(message?.trim() ? { query: message } : {}),
		} as IPayload;
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_PATH}/lead/create`,
				payload
			);
			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(
					error.response?.data?.message || 'Something went wrong!'
				);
			}
			throw new Error('Unexpected error occurred!');
		}
	});

export { contactUsAction };
