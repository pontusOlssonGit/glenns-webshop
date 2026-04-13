"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "./Store";

export default function ModalCart({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogReference = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogReference.current;
    if (dialog) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogReference}
      onClose={() => router.back()}
      onClick={(e) => {
        if (e.target === dialogReference.current) {
          dialogReference.current?.close();
        }
      }}
      style={
        {
          position: "fixed",
          margin: 0,
          top: "calc(anchor(--cart-icon bottom) + 10px)",
          right: "calc(anchor(--cart-icon right) - 50px)",
          left: "auto",
          bottom: "auto",
        } as React.CSSProperties
      }
      className="  shadow-2xl backdrop:bg-black/20  overflow-hidden w-[600px]"
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
