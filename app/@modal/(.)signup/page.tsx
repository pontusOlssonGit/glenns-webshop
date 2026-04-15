"use client"
import ModalAuth from "@/components/modalAuth";
import Signup from "@/components/auth/signup";

export default function modalLogIn() {
    return (
        <ModalAuth>
            <Signup />
        </ModalAuth>
    );
}