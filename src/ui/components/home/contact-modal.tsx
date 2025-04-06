'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';
import { z } from 'zod';

import { contactUsAction } from '../../../actions/contact';
import { Button } from '../../shared/button';
import { Dialog, DialogContent, DialogHeader } from '../../shared/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../../shared/form';
import { FloatingInput } from '../../shared/input';

const schema = z.object({
	name: z.string().min(3, 'Name is required '),
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
	const [show, setShow] = useState(true);

	useEffect(() => {
		setShow(!show);
		if (!result?.data) return;

		if (result?.data?.status === 'SUCCESS') {
			form?.reset();
			toast.success('Data submitted successfully!');
			setShow(!show);
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
		<Dialog open={show} onOpenChange={() => setShow(!show)}>
			<DialogContent>
				<section id="contact" className="container relative p-16">
					<DialogHeader>
						<h2 className="text-left text-[24px] font-medium leading-[34px]">
							What can we help with?
						</h2>
					</DialogHeader>
					<section className="lg:gap-42 lg:grid lg:grid-cols-3">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="pt-42 col-span-3 space-y-24"
							>
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
									disabled={
										!form.formState.isValid || isExecuting
									}
									loading={isExecuting}
									loadingText="Submitting..."
									type="submit"
									className="!mt-42 min-w-[220px]"
								>
									Submit
								</Button>
							</form>
						</Form>
					</section>
				</section>
			</DialogContent>
		</Dialog>
	);
};

export default Contact;
