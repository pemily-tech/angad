'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';
import { z } from 'zod';

import { contactUsAction } from '../../../actions/contact';
import { Button } from '../../shared/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../../shared/form';
import { ImagePlaceholder } from '../../shared/image';
import { FloatingInput } from '../../shared/input';

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

export const Contact = () => {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			mobileNumber: '',
			message: '',
		},
	});
	const { execute, result, isExecuting } = useAction(contactUsAction);

	useEffect(() => {
		if (!result?.data) return;

		if (result?.data?.status === 'SUCCESS') {
			form?.reset();
			toast.success('Data submitted successfully!');
		} else {
			toast.error('Please try again.');
		}
	}, [form, result]);

	const onSubmit = async (values: {
		name: string;
		mobileNumber: string;
		message?: string;
	}) => {
		const payload = {
			mobileNumber: values.mobileNumber,
			message: values?.message,
			name: values?.name,
		};
		execute(payload);
	};

	return (
		<section id="contact" className="container relative px-16 py-[64px]">
			<h2 className="my-24 text-left text-[24px] font-medium leading-[34px]">
				What can we help with?
			</h2>
			<section className="lg:gap-42 lg:grid lg:grid-cols-3">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="pt-42 col-span-2 space-y-24"
					>
						<div className="lg:gap-42 mb-24 grid md:grid-cols-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field, fieldState }) => (
									<FormItem>
										<FormControl>
											<FloatingInput
												label="Name"
												id="name"
												placeholder=""
												isError={!!fieldState.error}
												maxLength={10}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="mobileNumber"
								render={({ field, fieldState }) => (
									<FormItem>
										<FormControl>
											<FloatingInput
												label="Your 10 digit Mobile Number"
												type="numeric"
												id="mobileNumber"
												placeholder=""
												isError={!!fieldState.error}
												maxLength={10}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="message"
							render={({ field, fieldState }) => (
								<FormItem>
									<FormControl>
										<FloatingInput
											label="Message"
											id="message"
											placeholder=""
											isError={!!fieldState.error}
											maxLength={10}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							disabled={!form.formState.isValid || isExecuting}
							loading={isExecuting}
							loadingText="Submitting..."
							type="submit"
							className="!mt-42 min-w-[220px]"
						>
							Submit
						</Button>
					</form>
				</Form>
				<section className="col-span-1 mt-24 flex items-center justify-center lg:mt-0">
					<ImagePlaceholder
						src="/images/Dog.png"
						containerClasses="h-[256px] w-[253px]"
						imageClasses="object-cover"
					/>
				</section>
			</section>
		</section>
	);
};

export default Contact;
