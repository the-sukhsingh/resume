import React from 'react'
import { ModeToggle } from './theme/ThemeToggle';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { ViewTransitionLink } from './TransitionLink';

const Navbar = () => {
    return (
        <header className="bg-background border px-2 py-2 pb-1.5 flex justify-between items-start rounded-t-lg">
            <ViewTransitionLink href={"/"} className='flex items-start gap-2'>
                <span className='size-8 bg-linear-to-br from-cherry/80 to-cherry inline-flex justify-center items-center rounded-sm shadow-[0_0_2px_1px_inset_rgba(0,0,0,0.1)] dark:shadow-[0_0_2px_2px_inset_rgba(255,255,255,0.1)] p-1.5 relative after:content-[""] after:absolute after:inset-0 after:rounded-sm after:border-t after:border-neutral-400'>

                    <FileText className="text-white" />
                </span>
                <h1 className="font-cormorant text-3xl font-semibold">Resumely</h1>
            </ViewTransitionLink>

            <ModeToggle />

        </header>
    )
};

export default Navbar