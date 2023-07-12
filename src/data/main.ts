import { TtoDoCategories } from '../types/Main';
export const ToDoCategoriesNames = {
  New: 'New tasks',
  InProcess: 'In Process',
  Completed: 'Completed',
};

export const toDoCategories: TtoDoCategories[] = [
  {
    name: ToDoCategoriesNames.New,
    bgColor: '58,253,45',
  },
  {
    name: ToDoCategoriesNames.InProcess,
    bgColor: '255,224,45',
  },
  {
    name: ToDoCategoriesNames.Completed,
    bgColor: '249,0,0',
  },
];
