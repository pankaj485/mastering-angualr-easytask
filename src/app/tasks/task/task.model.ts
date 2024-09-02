export interface Task {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
  userId: string;
}

export interface NewTask {
  title: string;
  summary: string;
  date: string;
}
