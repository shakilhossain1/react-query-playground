interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type Action = LoginAction | LogoutAction;

const authReducer = (user: string, action: Action): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return user;
};

export default authReducer;
