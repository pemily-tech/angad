import Image from 'next/image';

const data = [
	{
		id: 1,
		img: '/images/personalize.jpeg',
		heading: 'Personalized Setup',
		descriptoin:
			'When you add your clients, your clinic automatically becomes the default setting.',
	},
	{
		id: 2,
		img: '/images/organized.jpeg',
		heading: 'Organized Clinic',
		descriptoin:
			'Easily manage all aspects of your clinic like appointments, medical records, vaccination history, doctors and more.',
	},
	{
		id: 3,
		img: '/images/app.jpeg',
		heading: 'All-in-One App',
		descriptoin:
			'Enjoy the convenience of having everything you need in a single app.',
	},
];

export const Services = () => {
	return (
		<div id="services" className="container px-16 py-[68px]">
			<h2 className="my-24 text-center text-[36px] font-medium leading-[44px]">
				How We Support You
			</h2>
			<div className="grid gap-32 lg:grid-cols-3 lg:gap-16">
				{data?.map((service) => {
					return (
						<div
							className="relative col-span-1 flex flex-col items-center justify-center transition-all"
							key={service.id}
						>
							<figure className="relative h-[286px] w-full">
								<Image
									src={service.img}
									alt={service.heading}
									fill
									className="rounded-t-[12px] object-cover"
								/>
							</figure>
							<div className="shadow-1 w-full flex-1 rounded-b-[12px] bg-white px-16 py-20">
								<h4 className="text-brand text-20 leading-28 pb-12 text-center font-medium">
									{service.heading}
								</h4>
								<p className="text-16 leading-21 text-center font-medium">
									{service.descriptoin}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
