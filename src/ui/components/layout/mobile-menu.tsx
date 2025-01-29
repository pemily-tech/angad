import React, { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTrigger,
} from '@radix-ui/react-dialog';
import { MenuIcon } from 'lucide-react';

import { DialogHeader } from '../../shared/dialog';
import Menu from './menu';

const MobileMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			<DialogTrigger>
				<MenuIcon />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogDescription className="mx-16">
						<Menu open={open} setOpen={setOpen} />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default MobileMenu;
