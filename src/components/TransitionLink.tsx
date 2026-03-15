"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function ViewTransitionLink({ href, children, className }: Props) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Respect modified clicks (open in new tab, etc.)
        if (
            e.defaultPrevented ||
            e.button !== 0 ||
            e.metaKey ||
            e.altKey ||
            e.ctrlKey ||
            e.shiftKey
        ) {
            return;
        }

        e.preventDefault();

        // Fallback when View Transitions API is not supported
        if (!(document as any).startViewTransition) {
            router.push(href);
            return;
        }

        (document as any).startViewTransition(() => {
            router.push(href);
        });
    };

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
}
