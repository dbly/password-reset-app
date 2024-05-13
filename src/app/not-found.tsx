export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
          <h1 className={"text-4xl font-bold"}>
            404 | This page could not be found.
          </h1>
      </div>
    </>
  );
}
