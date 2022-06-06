export interface UserCredentialProps {
  name: string;
  label: string;
  inputType: string;
  ariaLabel: string;
  placeholder?: string;
  userCredential: {};
  setUserCredential: (event: any) => void;
}
