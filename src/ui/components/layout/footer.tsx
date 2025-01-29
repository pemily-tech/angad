import Link from 'next/link';

import { ImagePlaceholder } from '../../shared/image';

export const Footer = () => {
	return (
		<footer className="bg-black-bg px-16 py-24">
			<div className="container">
				<div className="grid lg:grid-cols-3">
					<div className="col-span-1">
						<Link href="/">
							<ImagePlaceholder
								containerClasses="w-[93px] h-[38px]"
								src="https://pemilyy-assets.s3.ap-south-1.amazonaws.com/logos-new/logo-white-1.png"
								imageClasses="object-contain"
							/>
						</Link>
						<p className="text-14  leading-20  py-16 text-white lg:py-24">
							Copyright © {new Date().getFullYear()} Veena Tech.
						</p>
						<div className="flex pb-16 lg:pb-24">
							<Link
								className="pr-12"
								target="_blank"
								href="https://www.instagram.com/_pemilyy"
							>
								<ImagePlaceholder
									containerClasses="w-32 h-32"
									src="/icons/instagram.svg"
								/>
							</Link>
							<Link
								className="pr-12"
								target="_blank"
								href="https://www.youtube.com/@_pemilyy"
							>
								<ImagePlaceholder
									containerClasses="w-32 h-32"
									src="/icons/youtube.svg"
								/>
							</Link>
						</div>
					</div>
					<div className="col-span-2 grid grid-cols-2 gap-24 text-white lg:grid-cols-3">
						<div className="col-span-1">
							<p className="text-20 leading-28 mb-10 font-semibold lg:mb-28">
								Company
							</p>
							<ul>
								<li className="py-8">
									<Link
										className="text-14 leading-20 lg:text-16 lg:leading-24"
										href="/about"
									>
										About Us
									</Link>
								</li>
								<li className="py-8">
									<Link
										className="text-14 leading-20 lg:text-16 lg:leading-24"
										href="#services"
									>
										Services
									</Link>
								</li>
								<li className="py-8">
									<Link
										className="text-14 leading-20 lg:text-16 lg:leading-24"
										href="#why"
									>
										Why Pemilyy
									</Link>
								</li>
								<li className="py-8">
									<Link
										className="text-14 leading-20 lg:text-16 lg:leading-24"
										href="#features"
									>
										Features
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="text-20 leading-28 mb-10 font-semibold lg:mb-28">
								Support
							</p>
							<ul>
								<li className="py-8">
									<Link
										className="text-14 leading-20 lg:text-16 lg:leading-24"
										href="/privacy"
									>
										Privacy Policy
									</Link>
								</li>
								<li className="py-8">
									<Link
										className="text-14 leading-20 lg:text-16 lg:leading-24"
										href="/terms"
									>
										Terms of service
									</Link>
								</li>
								<li className="py-8">
									<Link
										className="text-14 leading-20 lg:text-16 lg:leading-24"
										href="/refund-policy"
									>
										Refund Policy
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="text-20 leading-28 mb-10 font-semibold lg:mb-28">
								Contact
							</p>
							<ul>
								<li className="py-8">
									<p className="text-14 leading-20 text-white">
										Email:{' '}
										<a
											className="font-medium"
											href="mailto:care@pemilyy.com"
										>
											care@pemilyy.com
										</a>
									</p>
								</li>
								<li className="py-8">
									<p className="text-14 leading-20 text-white">
										Mobile Number:{' '}
										<a
											className="font-medium"
											href="tel:7047037587"
										>
											+91 70470 37587
										</a>
									</p>
								</li>
								<li className="py-8">
									<address className="text-12 text-white">
										Address: FIFTH FLOOR,NO 51, OLD SITE NO
										1,KOKARYA, BUSINESS SYNERGY CENTER, 5TH
										MAIN , 5TH BLOCK, JAYANAGAR,
										Bengaluru,Karnataka - 560011
									</address>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
