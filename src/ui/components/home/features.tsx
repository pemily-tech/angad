'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

import { Carousel, CarouselContent, CarouselItem } from '../../shared/carousel';
import { ImagePlaceholder } from '../../shared/image';

const data = [
	{
		id: 0,
		img: '/images/feature-1.png',
		heading: 'Upcoming Vaccinations',
		subHeading:
			"Safeguarding every Pet's Well-being with Timely Vaccinations",
	},
	{
		id: 1,
		img: '/images/feature-2.png',
		heading: 'Upcoming Appointments',
		subHeading:
			'Seamlessly Organizing Your Schedule for Hassle-free Clinic Visits.',
	},
];

export const Features = () => {
	return (
		<div
			id="features"
			className="py-54 container relative overflow-hidden px-16"
		>
			<h2 className="my-24 text-center text-[36px] font-medium leading-[44px]">
				Bring Your clinic to one Mobile App
			</h2>
			<Carousel
				plugins={[
					Autoplay({
						delay: 3000,
					}),
				]}
			>
				<CarouselContent>
					{data?.map((feature) => {
						return (
							<CarouselItem key={feature.id}>
								<div className="gap-54 grid lg:grid-cols-2">
									<ImagePlaceholder
										containerClasses="w-full h-[280px] lg:h-[480px] col-span-1"
										src={feature.img}
										imageClasses="object-contain"
									/>
									<div className="col-span-1 flex flex-col justify-center">
										<h4 className="text-24 text-center font-medium leading-[44px] lg:text-left">
											{feature.heading}
										</h4>
										<p className="text-16 leading-20 mt-12 text-center lg:text-left">
											{feature.subHeading}
										</p>
										<div className="lg:gap-30 mt-24 flex gap-12">
											<Link
												href="https://play.google.com/store/apps/details?id=com.pemilyy.android"
												className="bg-black-bg2 grid h-[65px] w-full max-w-[220px] grid-cols-3 place-items-center rounded-[12px] border border-white px-20 py-12 lg:h-[78px] lg:w-[220px]"
												target="_blank"
											>
												<ImagePlaceholder
													containerClasses="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] col-span-1"
													src="/icons/play-store.svg"
													imageClasses="object-contain"
												/>
												<p className="col-span-2 text-white">
													<span className="text-12 leading-15 block">
														Get it on
													</span>
													<span className="text-16 lg:text-20 lg:leading-25">
														Google Play
													</span>
												</p>
											</Link>
											<Link
												href="https://apps.apple.com/us/app/pemilyy/id6474898482"
												className="bg-black-bg2 grid h-[65px] w-full max-w-[220px] grid-cols-3 place-items-center rounded-[12px] border border-white px-20 py-12 lg:h-[78px] lg:w-[220px]"
												target="_blank"
											>
												<ImagePlaceholder
													containerClasses="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] col-span-1"
													src="/icons/app-store.svg"
													imageClasses="object-contain"
												/>
												<p className="col-span-2 text-white">
													<span className="text-12 leading-15 block">
														Get it on
													</span>
													<span className="text-16 lg:text-20 lg:leading-25">
														App Store
													</span>
												</p>
											</Link>
										</div>
									</div>
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default Features;
