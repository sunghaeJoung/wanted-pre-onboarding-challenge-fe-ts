interface TodoType {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: string[];
}

interface TodoList {
  todos: TodoType[];

  createTodo: (todo: TodoType) => void;
  findById: (id: number) => TodoType;
  updateTodo: (todo: TodoType) => void;
  updateTodoTag: (id: number, tagIndex: number, tag: string) => void;
  deleteTodo: (id: number) => void;
  resetTodo: () => void;
  deleteTag: (todoIndex: number, tagIndex: number) => void;
  deleteAllTag: (todoIndex: number) => void;
}
