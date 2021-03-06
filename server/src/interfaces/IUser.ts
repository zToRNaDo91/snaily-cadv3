interface IUser {
  id: string;
  username: string;
  password: string;
  rank: "owner" | "admin" | "moderator" | "user";
  leo: boolean;
  ems_fd: boolean;
  dispatch: boolean;
  tow: boolean;
  banned: boolean;
  ban_reason: string;
  whitelist_status: "pending" | "accepted";
}

export default IUser;
