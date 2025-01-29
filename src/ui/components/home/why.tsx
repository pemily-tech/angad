import React from 'react';
import Image from 'next/image';

const data = [
	{
		id: 0,
		icon: '/icons/remainders.svg',
		title: 'Vaccination Reminders',
		subtitle:
			'Effortlessly notifying pet parents via WhatsApp, text message, and app notification.',
	},
	{
		id: 1,
		icon: '/icons/records.svg',
		title: 'Vaccination History',
		subtitle:
			'Keep track of all pet vaccinations and receive timely reminders to send notifications to pet parents.',
	},
	{
		id: 2,
		icon: '/icons/vaccination.svg',
		title: 'Organized Medical Records',
		subtitle:
			"Streamline your clinic's operations by easily managing all client records with just a single tap.",
	},
];

export const Why = () => {
	return (
		<div id="why" className="container px-16 py-[68px]">
			<h2 className="mb-24 text-center text-[36px] font-medium leading-[44px]">
				Why Pemilyy ?
			</h2>
			<div className="grid gap-[54px] lg:grid-cols-3 lg:gap-[100px]">
				{data?.map((sec) => {
					return (
						<div
							className="shadow-bg1 rounded-6 col-span-1 flex flex-col items-center justify-center p-24 lg:px-[54px]"
							key={sec.id}
						>
							<figure className="relative size-[50px]">
								<Image alt="" src={sec.icon} fill />
							</figure>
							<h5 className="text-28 py-12 text-center font-bold leading-[36px]">
								{sec.title}
							</h5>
							<p className="text-14 leading-20 text-center text-[#717171]">
								{sec.subtitle}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Why;
