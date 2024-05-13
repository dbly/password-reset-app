import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Westpac - Password Reset",
    description: "Westpac - Reset your password.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <div className={"mx-2 sm:mx-4 md:mx-12 lg:mx-64 xl:mx-64"}>
            <header>
                <Link href={"/"}>
                    <svg className={"mt-8"} fill="none" height="32" id="4bde5739-0f45-4932-963e-5f4dc7741d70" role="img"
                         viewBox="0 0 40 16" width="80" xmlns="http://www.w3.org/2000/svg"
                         aria-labelledby="4bde5739-0f45-4932-963e-5f4dc7741d70-title"><title
                        id="4bde5739-0f45-4932-963e-5f4dc7741d70-title">Westpac Logo</title>
                        <path
                            d="M14.51 14.3L10.48 2.34C9.91 0.52 8.95 0 7.47 0H0C0.59 0.23 0.98 1.68 0.98 1.68L4.58 13.7C5 15.2 6.3 16 7.77 16H15.69C15.13 15.9 14.51 14.3 14.51 14.3Z"
                            fill="#d5002b"></path>
                        <path
                            d="M32.53 0C31.06 0 30.09 0.52 29.52 2.34L25.49 14.3C25.49 14.3 24.87 15.89 24.3 15.99V0H15.7V16H24.31H32.23C33.71 16 35 15.2 35.42 13.7L39.03 1.68C39.03 1.68 39.42 0.23 40.01 0H32.53V0Z"
                            fill="#d5002b"></path>
                    </svg>
                </Link>
            </header>
            {children}
        </div>
        </body>
        </html>
    );
}
