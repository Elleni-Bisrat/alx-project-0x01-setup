import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [userList, setUserList] = useState<UserProps[]>(users);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const id = userList.length + 1;
    setUserList([...userList, { ...newUser, id } as UserProps]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userList.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users }
  };
}

export default Users;
