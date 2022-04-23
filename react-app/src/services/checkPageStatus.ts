import useFetch from "../hooks/useFetch";

function CheckPageStatus(pageName: string) {
  const fetchedPage = useFetch("data/pages.json", [
    {
      name: "",
      status: "",
    },
  ]);

  return fetchedPage.find(
    (item) => item.name.toLocaleLowerCase() === pageName.toLocaleLowerCase()
  )?.status === "true"
    ? true
    : false;
}

export default CheckPageStatus;
