export default interface User{
  _id: string,
  login: string,
  lastOnline: Date | null,
  avatar: string | null,
}