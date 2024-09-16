interface ResultsItemProps {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const ResultsItem: React.FC<ResultsItemProps> = ({
  name,
  username,
  email,
  phone,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default ResultsItem;
