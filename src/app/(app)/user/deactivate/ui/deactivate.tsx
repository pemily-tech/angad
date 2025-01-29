'use client';

import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';
import { z } from 'zod';

import { deactivateUserAction } from '../../../../../actions/deactivate';
import { Button } from '../../../../../ui/shared/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../../../../../ui/shared/form';
import { FloatingInput } from '../../../../../ui/shared/input';

const schema = z.object({
	reason: z.string().min(1, 'Reason is required'),
});

type FormValues = z.infer<typeof schema>;

export default function Deactivate() {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			reason: '',
		},
	});
	const { execute, result, isExecuting } = useAction(deactivateUserAction);
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());
	const router = useRouter();

	useEffect(() => {
		if (!result?.data) return;

		if (result?.data?.status === 'SUCCESS') {
			form?.reset();
			router.push('/user/deactivate');
			toast.success('Data submitted successfully!');
		} else {
			toast.error('Please try again.');
		}
	}, [form, result, router]);

	const onSubmit: SubmitHandler<FormValues> = async (values) => {
		const payload = {
			mobileNumber: params.mobileNumber,
			reason: values?.reason,
			token: params?.token,
		};
		execute(payload);
	};

	return (
		<div className="mx-auto flex h-full max-w-[520px] flex-col items-center justify-center">
			<div className="text-24 mb-24 text-center font-semibold">
				What is the reason you are leaving Pemilyy
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
					<FormField
						control={form.control}
						name="reason"
						render={({ field, fieldState }) => (
							<FormItem>
								<FormControl>
									<FloatingInput
										label="Reason"
										id="reason"
										placeholder=""
										isError={!!fieldState.error}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={
							!form.formState.isValid ||
							form.formState.isSubmitting ||
							isExecuting
						}
						loading={form.formState.isSubmitting || isExecuting}
						loadingText="Submitting..."
						type="submit"
						className="mt-24 w-full"
					>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
