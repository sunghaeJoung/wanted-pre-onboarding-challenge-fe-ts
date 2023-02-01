/**
 * 할일
 * @typedef {Object} TodoType
 * @property {number} id
 * @property {string} content
 * @property {boolean} completed
 * @property {string} category
 * @property {string[]} [tags]
 */

/**
 * 테그 수정을 위한 TodoType
 * @typedef {Object} TodoUpdateType
 * @property {number} id
 * @property {number} tagIndex
 * @property {string} tag
 */

class TodoList {
  /**
   * 할일들
   * @type {TodoType[]}
   */
  todos = [];

  /**
   * 할일 추가
   * @param {TodoType} todo
   */
  createTodo(todo) {
    this.#verifyContent(todo.content);
    this.todos.push(todo);
  }

  /**
   * 모든 할일 조회
   * @returns {TodoType[]}
   */
  get todos() {
    return [...this.todos];
  }

  /**
   * id로 todo 찾기
   * @param {number} id
   * @returns {TodoType} 찾은 할일
   */
  findById(id) {
    return this.todos.find((i) => i.id === id);
  }

  /**
   * 할일 업데이트
   * @param {TodoType} todo
   * @throws {Error} Not Found Id
   */
  updateTodo(todo) {
    const findIndex = this.#findTodoIndex(todo.id);
    this.#verifyContent(todo.content);

    this.todos[findIndex] = {
      ...todo,
    };
  }

  /**
   * 특정 할 일의 특정 태그를 수정
   * @param {TodoUpdateType}
   */
  updateTodoTag({ id, tagIndex, tag }) {
    const findIndex = this.#findTodoIndex(id);
    this.todos[findIndex].tags[tagIndex] = tag;
  }

  /**
   * ID를 기반으로 특정 할 일을 삭제
   * @param {number} id
   */
  deleteTodo(id) {
    this.todos = this.todos.filter((i) => i.id !== id);
  }

  /**
   * 모든 할 일을 제거
   */
  resetTodo() {
    this.todos = [];
  }

  /**
   * 특정 할 일의 특정 태그를 삭제
   * @param {number} todoIndex
   * @param {number} tagIndex
   */
  deleteTag(todoIndex, tagIndex) {
    if (!this.todos[todoIndex].tags) return;
    delete this.todos[todoIndex].tags[tagIndex];
  }

  /**
   * 특정 할 일의 모든 태그를 제거
   * @param {number} todoIndex
   */
  deleteAllTag(todoIndex) {
    this.todos[todoIndex].tags = [];
  }

  /**
   * 특정 할일 아이디 찾기
   * @param {number} id - 할일 아이디
   * @returns {number} 할일의 index
   */
  #findTodoIndex(id) {
    const findIndex = this.todos.findIndex((i) => i.id === id);
    if (findIndex === -1) throw new Error("Not Found Id");
    return findIndex;
  }

  /**
   * content 값 검사
   * @param {string} [content]
   */
  #verifyContent(content) {
    if (!content || content.trim() === "")
      throw new Error("When content empty cannot create todo");
  }
}

module.exports = TodoList;
