'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ImagePlaceholder } from '../../shared/image';
import Menu from './menu';
import MobileMenu from './mobile-menu';

export const Header = () => {
	const [prevScrollPos, setPrevScollPos] = useState(0);
	const [isSticky, setIsSticky] = useState(false);
	const logo = isSticky
		? 'https://pemilyy-assets.s3.ap-south-1.amazonaws.com/logos-new/logo-with-caption-primary.png'
		: 'https://pemilyy-assets.s3.ap-south-1.amazonaws.com/logos-new/logo-white-1.png';
	const pathName = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (currentScrollPos > prevScrollPos) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
			setPrevScollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<header className="">
			<div
				className={`header ${pathName === '/' ? 'bg-transparent' : 'bg-black-bg'} ${
					isSticky ? 'sticky' : ''
				}`}
			>
				<div className="container">
					<div className="flex h-full items-center justify-between">
						<Link href="/">
							<ImagePlaceholder
								containerClasses="w-[108px] h-[42px] lg:w-[160px] lg:h-[48px]"
								imageClasses="object-contain"
								src={logo}
							/>
						</Link>
						{isSticky && (
							<div className="hidden flex-1 justify-end lg:flex">
								<Menu open={false} setOpen={() => null} />
							</div>
						)}
						<div className="lg:hidden">
							<MobileMenu />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
