"use client";

import Image from "next/image";
import { ExternalLink, Maximize2, Rocket, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { publicAssetUrl } from "@/lib/site";

interface ScreenshotViewerProps {
  src?: string | null;
  title: string;
  alt: string;
}

export function ScreenshotViewer({ src, title, alt }: ScreenshotViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const helpId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
    };
  }, [isOpen]);

  const openViewer = () => {
    if (!dialogRef.current) return;
    setPreviewFailed(false);
    dialogRef.current.showModal();
    setIsOpen(true);
    closeRef.current?.focus({ preventScroll: true });
  };

  const onClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  };

  if (!src || imageFailed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center">
        <Rocket className="h-10 w-10 text-accent" aria-hidden />
        <p className="text-muted text-sm">Screenshot coming soon</p>
      </div>
    );
  }

  const imageUrl = publicAssetUrl(src);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openViewer}
        aria-label={`View ${title} screenshot full screen`}
        aria-haspopup="dialog"
        className="absolute inset-0 min-h-11 min-w-11 cursor-zoom-in focus-visible:ring-inset"
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(min-width: 1152px) 544px, (min-width: 1024px) calc((100vw - 64px) / 2), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
          className="object-contain object-center lg:object-cover lg:object-left-top"
          onError={() => setImageFailed(true)}
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-zinc-950/90 px-3 py-2 text-xs font-medium text-white">
          <Maximize2 className="h-4 w-4" aria-hidden /> View screenshot
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={helpId}
        onClose={onClose}
        className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none border-0 bg-[rgb(var(--bg))] p-4 text-[rgb(var(--fg))] backdrop:bg-black/80 sm:p-6"
      >
        <div className="flex h-full min-h-0 flex-col gap-4">
          <div className="flex shrink-0 items-center justify-between gap-3">
            <h2 id={titleId} className="min-w-0 text-lg font-semibold">{title} screenshot</h2>
            <button
              ref={closeRef}
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close screenshot viewer"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgb(var(--border))]"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-[rgb(var(--border))]">
            {isOpen && (previewFailed ? (
              <p role="status" className="text-muted p-5 text-sm">The preview could not load. Try opening the original image below.</p>
            ) : (
              <Image
                src={imageUrl}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain"
                onError={() => setPreviewFailed(true)}
              />
            ))}
          </div>

          <div className="shrink-0">
            <p id={helpId} className="text-muted mb-2 text-sm">Open the original image to zoom in with your browser.</p>
            <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Open original <ExternalLink className="h-4 w-4" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
