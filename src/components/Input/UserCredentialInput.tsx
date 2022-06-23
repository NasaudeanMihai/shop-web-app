import { FC, ReactElement } from 'react';
import { UserCredentialProps } from './userCredentialProps';

const UserCredentialInput: FC<UserCredentialProps> = ({
  setUserCredential,
  userCredential,
  placeholder,
  ariaLabel,
  inputType,
  label,
  name,
}: UserCredentialProps): ReactElement => {
  return (
    <div className="input-group-4 wrapper-user-input">
      <span className="input-group-text-2">{label}</span>
      <input
        name={name}
        type={inputType}
        aria-label={ariaLabel}
        className="form-control"
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setUserCredential({ ...userCredential, ...{ [event.target.name]: event.target.value } })
        }
      />
    </div>
  );
};
export default UserCredentialInput;
