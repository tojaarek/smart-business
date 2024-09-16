import { useSelector, useDispatch } from "react-redux";
import {
  selectUsers,
  selectSearchName,
  selectSearchUsername,
  selectSearchEmail,
  selectSearchPhone,
} from "../../redux/app.selectors";
import {
  setSearchName,
  setSearchUsername,
  setSearchEmail,
  setSearchPhone,
} from "../../redux/app.slice";
import ResultsItem from "../ResultsItem/ResultsItem";
import { Container, Table, Th, InputWrapper, Icon } from "./Results.styled";
import SearchInput from "../SearchInput/SearchInput";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const Results = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const searchName = useSelector(selectSearchName);
  const searchUsername = useSelector(selectSearchUsername);
  const searchEmail = useSelector(selectSearchEmail);
  const searchPhone = useSelector(selectSearchPhone);

  const handleSearchNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchName(event.target.value));
  };
  const handleSearchUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchUsername(event.target.value));
  };
  const handleSearchEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchEmail(event.target.value));
  };
  const handleSearchPhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchPhone(event.target.value));
  };

  const filterUsers = (): User[] => {
    return users.filter(({ name, username, email, phone }) => {
      const matchesName = name.toLowerCase().includes(searchName.toLowerCase());
      const matchesUsername = username
        .toLowerCase()
        .includes(searchUsername.toLowerCase());
      const matchesEmail = email
        .toLowerCase()
        .includes(searchEmail.toLowerCase());
      const matchesPhone = phone
        .toLowerCase()
        .includes(searchPhone.toLowerCase());

      return matchesName && matchesUsername && matchesEmail && matchesPhone;
    });
  };

  const filteredUsers = filterUsers();

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>
              <InputWrapper data-placeholder="Name" $hasValue={searchName.length > 0}>
                <SearchInput
                  placeholder="Name"
                  value={searchName}
                  onChange={handleSearchNameChange}
                />
                <Icon />
              </InputWrapper>
            </Th>
            <Th>
              <InputWrapper data-placeholder="Username" $hasValue={searchUsername.length > 0}>
                <SearchInput
                  placeholder="Username"
                  value={searchUsername}
                  onChange={handleSearchUsernameChange}
                />
                <Icon />
              </InputWrapper>
            </Th>
            <Th>
              <InputWrapper data-placeholder="Email" $hasValue={searchEmail.length > 0}>
                <SearchInput
                  placeholder="Email"
                  value={searchEmail}
                  onChange={handleSearchEmailChange}
                />
                <Icon />
              </InputWrapper>
            </Th>
            <Th>
              <InputWrapper data-placeholder="Phone" $hasValue={searchPhone.length > 0}>
                <SearchInput
                  placeholder="Phone"
                  value={searchPhone}
                  onChange={handleSearchPhoneChange}
                />
                <Icon />
              </InputWrapper>
            </Th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <ResultsItem key={user.id} {...user} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Results;
