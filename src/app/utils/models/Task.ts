export interface Task {
  id: number,
  title: string,
  description: string,
  is_done: boolean
}

export type Tasks = Task[];
