import Link from 'next/link';

import { ImagePlaceholder } from '../../shared/image';

export const Hero = () => {
	return (
		<div className="relative">
			<ImagePlaceholder
				containerClasses="h-screen hidden lg:block"
				alt="Pemilyy"
				src="/images/hero-1.jpeg"
				imageClasses="object-cover"
				sizes="(max-width: 1024px) 100vw, 50vw"
				priority={true}
			/>
			<ImagePlaceholder
				containerClasses="h-[calc(100vh-420px)] lg:hidden"
				alt="Pemilyy"
				src="/images/hero-mobile.jpg"
				imageClasses="object-cover"
				sizes="(max-width: 1024px) 100vw, 100vh"
				priority={true}
			/>
			<div className="flex flex-col justify-center px-16 pt-32 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:px-[144px] lg:pt-0">
				<h1 className="drop-shadow-text1 max-w-[650px] text-center text-[64px] font-bold leading-[76px] lg:text-left lg:text-white">
					Your Digital Pet Clinic Companion
				</h1>
				<p className="text-16 leading-24 py-24 text-center lg:text-left lg:text-white">
					Transitioning Your Pet Clinic into the Digital Age with Our
					Advanced Platform
				</p>
				<div className="lg:gap-30 flex gap-12">
					<Link
						href="https://play.google.com/store/apps/details?id=com.pemilyy.android"
						className="bg-black-bg2 grid h-[65px] w-full max-w-[220px] grid-cols-3 place-items-center rounded-[12px] border border-white px-20 py-12 lg:h-[78px] lg:w-[220px]"
						target="_blank"
					>
						<ImagePlaceholder
							containerClasses="relative h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] col-span-1"
							alt="Pemilyy"
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
							containerClasses="relative h-[32px] w-[32px] col-span-1"
							alt="Pemilyy"
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
	);
};

export default Hero;
