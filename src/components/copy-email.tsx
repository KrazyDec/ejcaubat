"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type CopyStatus = "idle" | "copying" | "copied" | "error";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const manualInput = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const statusId = useId();

  useEffect(() => {
    if (status === "error") {
      manualInput.current?.focus({ preventScroll: true });
      manualInput.current?.select();
    }
    if (status !== "copied") return;
    const timer = window.setTimeout(() => setStatus("idle"), 3000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    setStatus("copying");
    try {
      if (!navigator.clipboard?.writeText) {
        setStatus("error");
        return;
      }
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={copy}
        disabled={status === "copying"}
        aria-describedby={statusId}
        className="btn-secondary w-full disabled:opacity-60"
      >
        {status === "copied" ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
        {status === "copied" ? "Copied!" : status === "copying" ? "Copying…" : "Copy email address"}
      </button>
      <p id={statusId} role="status" aria-atomic="true" className="text-muted min-h-5 text-sm">
        {status === "copied" && "Email address copied to your clipboard."}
        {status === "error" && "Copying was blocked or is unavailable. Select and copy the address below."}
      </p>
      {status === "error" && (
        <div>
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium">Email address to copy</label>
          <input
            ref={manualInput}
            id={inputId}
            type="text"
            readOnly
            value={email}
            onFocus={(event) => event.currentTarget.select()}
            className="input"
          />
        </div>
      )}
    </div>
  );
}
