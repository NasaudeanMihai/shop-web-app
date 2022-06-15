export interface UserCredentialProps {
  name: string;
  label: string;
  inputType: string;
  ariaLabel: string;
  placeholder?: string;
  userCredential: { email: string; password: string; name: string };
  setUserCredential: (event: { email: string; password: string; name: string }) => void;
}
