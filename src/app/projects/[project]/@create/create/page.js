import { redirect } from "next/navigation";

import VersionModal from "./modal";

export default function Create({ params }) {
  const formSubmitHandler = async () => {
    "use server";
    const route = "/projects/" + params.project;
    console.log(route);
    redirect("/projects/1", "replace");
  };

  return <VersionModal formHandler={formSubmitHandler} />;
}
