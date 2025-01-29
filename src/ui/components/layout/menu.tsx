import React from 'react';
import Link from 'next/link';

const Menu = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
}) => {
	// const { scrollToBottom } = useScrollTop();

	return (
		<div className="flex h-full flex-col px-16 lg:flex-row lg:px-0">
			<div className="flex flex-1 flex-col items-start gap-24 lg:flex-row lg:items-center lg:justify-center lg:gap-[60px]">
				<Link
					className="text-18 hover:text-brand lg:text-16 lg:leading-24 block w-full lg:inline-block lg:w-auto"
					href="/about"
				>
					About Us
				</Link>
				<Link
					className="text-18 hover:text-brand lg:text-16 lg:leading-24 block w-full lg:inline-block lg:w-auto"
					href="#services"
					scroll={false}
					onClick={() => setOpen(!open)}
				>
					Services
				</Link>
				<Link
					className="text-18 hover:text-brand lg:text-16 lg:leading-24 block w-full lg:inline-block lg:w-auto"
					href="#why"
					onClick={() => setOpen(!open)}
				>
					Why Pemilyy
				</Link>
				<Link
					className="text-18 hover:text-brand lg:text-16 lg:leading-24 block w-full lg:inline-block lg:w-auto"
					href="#features"
					onClick={() => setOpen(!open)}
				>
					Features
				</Link>
				<Link
					className="text-18 hover:text-brand lg:text-16 lg:leading-24 block w-full lg:inline-block lg:w-auto"
					href="#contact"
					onClick={() => setOpen(!open)}
				>
					Contact Us
				</Link>
			</div>
			{/* <Button onClick={scrollToBottom} size="medium" className="hidden lg:block">
				Contact Us
			</Button> */}
		</div>
	);
};

export default Menu;
