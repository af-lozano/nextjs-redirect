import Link from "next/link";

export default function Page({ params }) {
  return (
    <>
      <div>Page: {params.project}</div>
      <Link
        href={{
          pathname: `/projects/${params.project}/create`,
        }}
        className="button-black  "
      >
        Create
      </Link>
    </>
  );
}
