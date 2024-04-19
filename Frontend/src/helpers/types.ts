import { ChangeEvent } from "react";

interface LoginProps {
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface User {
  id: number,
  username: string
}

export type { LoginProps, User };
