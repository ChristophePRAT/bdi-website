"use client";

import { useSyncExternalStore } from "react";

interface ObfuscatedLinkProps {
    encoded: string;
    type: "email" | "tel";
    className?: string;
}

// Subscription that does nothing as the value is static after hydration
const subscribe = () => () => {};

export default function ObfuscatedLink({
    encoded,
    type,
    className,
}: ObfuscatedLinkProps) {
    // Safely handle hydration by showing a placeholder on the server
    // and decoding only on the client.
    const decoded = useSyncExternalStore(
        subscribe,
        () => {
            try {
                return window.atob(encoded);
            } catch (e) {
                return null;
            }
        },
        () => null, // Server value
    );

    if (!decoded) {
        return <span className={className}>...</span>;
    }

    const href = type === "email" ? `mailto:${decoded}` : `tel:${decoded}`;

    return (
        <a
            href={href}
            className={className}
            title={type === "email" ? "Send email" : "Call"}
        >
            {decoded}
        </a>
    );
}
