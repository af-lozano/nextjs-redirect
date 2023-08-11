import Image from "next/image";

const testFetch = async () => {
  const res = await fetch("https://swapi.dev/api/people/2");

  const json = await res.json();
  // console.log(res);
  return json;
};

export default async function Home() {
  const test = await testFetch();
  return <div>{test.name}</div>;
}
