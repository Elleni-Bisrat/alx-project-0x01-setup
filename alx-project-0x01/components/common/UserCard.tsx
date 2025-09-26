import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website }) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-blue-600 hover:underline">
        Website: <a href={`http://${website}`} target="_blank">{website}</a>
      </p>
    </div>
  );
};

export default UserCard;
