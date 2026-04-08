"use client"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function ModalAuth({ children }: { children: React.ReactNode }) {
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
            className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-amber-950/50 backdrop:bg-amber-950/50 backdrop:backdrop-blur-sm overflow-hidden">

            {children}
        </dialog>
    )
}