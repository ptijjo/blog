import { SignUp } from "@clerk/nextjs";

export default function PageSignUp() {
    return (
        <section className="flex w-full h-screen  items-center justify-center">
            <SignUp />
        </section>
    );
}