import Link from 'next/link'

export default function Success() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className={"text-4xl font-bold"}>Successfully changed password.</h1>
                <p className={"mt-12 text-xl font-normal"}>Please <Link className={"text-red-500 underline hover:text-red-700"} href={"/login"}>log in</Link>.</p>
            </div>
        </main>
    );
}