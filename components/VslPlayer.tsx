"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { vsl } from "@/lib/config";

declare global {
  interface Window {
    _vidalytics?: Record<string, unknown[]>;
  }
}

/**
 * VSL container, sized 16:9 up front so the embed never shifts layout.
 *
 * When NEXT_PUBLIC_VIDALYTICS_EMBED_ID (and the loader URL from the same
 * Vidalytics embed snippet) are set, the official loader is injected and takes
 * over the container. When unset, a polished poster state renders instead.
 */
export default function VslPlayer() {
  const configured = vsl.embedId.length > 0;
  const loaderUrl = process.env.NEXT_PUBLIC_VIDALYTICS_LOADER_URL ?? "";
  const containerId = `vidalytics_embed_${vsl.embedId}`;
  const injected = useRef(false);

  useEffect(() => {
    if (!configured || !loaderUrl || injected.current) return;
    injected.current = true;

    // Mirrors the queue setup in the official Vidalytics embed snippet.
    window._vidalytics = window._vidalytics || {};
    window._vidalytics.VidalyticsLoaded =
      window._vidalytics.VidalyticsLoaded || [];
    window._vidalytics.VidalyticsLoaded.push(containerId);

    const script = document.createElement("script");
    script.async = true;
    script.src = loaderUrl;
    document.body.appendChild(script);
  }, [configured, loaderUrl, containerId]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-canvas-deep shadow-[0_24px_60px_-24px_rgba(23,20,15,0.4)]">
      <div className="relative aspect-video w-full">
        {configured ? (
          <div id={containerId} className="absolute inset-0 h-full w-full" />
        ) : (
          <VslPoster />
        )}
      </div>
    </div>
  );
}

/** Branded poster shown until a Vidalytics embed id is supplied. */
function VslPoster() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[radial-gradient(ellipse_at_center,#28221a_0%,#16130e_70%)] px-6 text-center">
      <Image
        src="/aethon-logo.svg"
        alt=""
        width={56}
        height={56}
        className="opacity-90"
      />
      <div
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/25 bg-cream/10"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1 text-cream"
        >
          <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.5-6.86a1.03 1.03 0 0 0 0-1.76L9.56 4.26A1.03 1.03 0 0 0 8 5.14Z" />
        </svg>
      </div>
      <p className="font-display text-lg text-cream sm:text-xl">
        How the system works, <em>in plain terms</em>
      </p>
      <p className="max-w-sm text-sm text-cream/60">
        A short walkthrough of what we install, how it fits your operation, and
        what a good fit looks like.
      </p>
    </div>
  );
}
