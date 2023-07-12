export type TtoDoCategories = {
  name: string;
  bgColor: string;
};
export type Status = {
  New: string;
  InProcess: string;
  Completed: string;
};
export type Data = {
  id: string;
  content: string;
  status: Status;
};
