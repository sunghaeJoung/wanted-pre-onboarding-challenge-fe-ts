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

let todoList: TodoType[] = []

const createTodo = (todo: TodoType): void => {
  todoList.push(todo);
}

// 피드백. 찾고자 하는 값이 없을 때 return값이 undefined일 수가 있음 
const findById = (id: number): TodoType | undefined => {
  return todoList.find(todo => todo.id === id)
}

const updateTodo = (todo: TodoType): void => {
  const targetIndex = todoList.findIndex(el => el.id === todo.id);
  if (!targetIndex) return;
  todoList[targetIndex] = todo;
}

const updateTodoTag = (id: number, tagIndex: number, tag: string): void => {
  const targetIndex = todoList.findIndex(el => el.id === id);

  if (!targetIndex) return;
  (todoList[targetIndex]?.tags || []).splice(tagIndex, 1, tag);
}

const deleteTodo = (id: number): void => {
  todoList = todoList.filter(el => el.id !== id);
}

const resetTodo = (): void => {
  todoList = [];
}

// 피드백. todoIndex가 아니라 todoId가 되어야하지 않을까?
const deleteTag = (todoIndex: number, tagIndex: number): void => {
  todoList[todoIndex].tags = (todoList[todoIndex]?.tags || []).filter((_, index) => index !== tagIndex)
}
// 피드백. 위와 동일
const deleteAllTag = (todoIndex: number): void => {
  todoList[todoIndex].tags = [];
};