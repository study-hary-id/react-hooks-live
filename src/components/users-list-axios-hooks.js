import useAxios from "axios-hooks";

export default function UsersListAxiosHooks() {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return (
    <div className="px-4">
      <div className="flex container mx-auto">
        <div>
            <h1>Loading...</h1>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="px-4">
      <div className="flex container mx-auto">
        <div>
            <h1>Error!</h1>
        </div>
      </div>
    </div>
  );

  const userRows = data.map((user, index) => (
    <li key={index} className="bg-white p-4 rounded shadow-lg mb-4 mr-4">
      <span className="text-output">{user.name}</span>
    </li>
  ));

  return (
    <div className="px-4">
      <div className="flex container mx-auto">
        <div>
          <div className="flex flex-wrap mb-4">
            <h1>List of Users</h1> &nbsp;
            <button
              className="my-2 px-8 font-semibold text-sm bg-gray-200 rounded-full shadow-sm"
              onClick={refetch}
            >Reload</button>
          </div>
          <ul className="flex flex-wrap">{userRows}</ul>
        </div>
      </div>
    </div>
  );
}
