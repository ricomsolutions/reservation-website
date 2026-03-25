"use client";

import { useEffect, useCallback, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
}: ModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "animate-[fadeIn_200ms_ease-in-out]"
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-xl bg-[#1a1a2e] shadow-2xl",
          "animate-[scaleIn_200ms_ease-in-out]",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-gray-700 px-6 py-4">
            <h2 id="modal-title" className="text-lg font-semibold text-white">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="rounded-md p-1 text-gray-400 transition-colors hover:text-white"
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>
          </div>
        )}

        {/* Close button when no title */}
        {!title && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-md p-1 text-gray-400 transition-colors hover:text-white"
            aria-label="Close modal"
          >
            <FaTimes size={18} />
          </button>
        )}

        {/* Body */}
        <div className="px-6 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-gray-700 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
