"use client"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

export default function ModalKontakt({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const dialogReference = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        dialogReference.current?.showModal()
    }, [])

    return (
        <dialog
            ref={dialogReference}
            onClose={() => router.back()}
            onClick={(e) => {
                if (e.target === dialogReference.current) {
                    dialogReference.current?.close()
                }
            }}
            className="px-4 py-2 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[50%] min-w-xs rounded shadow-amber-950/50 backdrop:bg-amber-950/50 backdrop:backdrop-blur-sm">
            <button
                onClick={() => dialogReference.current?.close()}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
            >
                <X size={20} />
            </button>
            {children}
        </dialog>
    )
}