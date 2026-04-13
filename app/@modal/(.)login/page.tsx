"use client"
import ModalAuth from "@/components/modalAuth";
import Login from "@/components/auth/login";

export default function modalLogIn() {
    return (
        <ModalAuth>
            <Login />
        </ModalAuth>
    );
}