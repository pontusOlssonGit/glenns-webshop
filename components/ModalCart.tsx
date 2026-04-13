"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "./Store";

export default function ModalCart({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogReference = useRef<HTMLDialogElement>(null);
  const iconRect = useCartStore((state) => state.iconRect);

  useEffect(() => {
    const dialog = dialogReference.current;
    if (dialog) {
      dialog.showModal();

      if (iconRect) {
        dialog.style.position = "fixed";
        dialog.style.top = `${iconRect.bottom + 20}px`;
        dialog.style.left = `${iconRect.right - 500}px`;
        dialog.style.margin = "0";
      }
    }
  }, [iconRect]);

  return (
    <dialog
      ref={dialogReference}
      onClose={() => router.back()}
      onClick={(e) => {
        if (e.target === dialogReference.current) {
          dialogReference.current?.close();
        }
      }}
      className="  shadow-2xl backdrop:bg-black/20  overflow-hidden w-[600px] pt-0 m-0"
    >
      <button
        onClick={() => router.back()}
        className="absolute right-0 top-0 font-bold h-13 w-13 p-3 bg-[#ef085f] rounded-bl-full text-white justify-start  pl-6 pb-6 flex hover:bg-[#a30641]"
      >
        ✕
      </button>
      {children}
    </dialog>
  );
}
