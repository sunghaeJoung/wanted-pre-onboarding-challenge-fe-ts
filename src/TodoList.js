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
   * @param {TodoType} todo - 추가할 할일
   * @returns {void}
   */
  createTodo() {}

  /**
   * 모든 할일 조회
   * @returns {TodoType[]}
   */
  get todos() {}

  /**
   * id로 todo 찾기
   * @param {number} id - 찾을 할 일의 id
   * @returns {TodoType} 찾은 할일
   */
  findById() {}

  /**
   * 할일 업데이트
   * @param {TodoType} todo - 바꿀 할 일 정보
   * @throws {Error} Not Found Id
   * @returns {void}
   */
  updateTodo() {}

  /**
   * 특정 할 일의 특정 태그를 수정
   * @param {TodoUpdateType} todoUpdateType - 할 일의 id, 바꿀 태그의 index, tag 값
   * @returns {void}
   */
  updateTodoTag() {}

  /**
   * ID를 기반으로 특정 할 일을 삭제
   * @param {number} id - 제거할 할 일의 id
   * @returns {void}
   */
  deleteTodo() {}

  /**
   * 모든 할 일을 제거
   * @returns {void}
   */
  resetTodo() {}

  /**
   * 특정 할 일의 특정 태그를 삭제
   * @param {number} todoIndex - 특정 할 일의 id
   * @param {number} tagIndex - 특정 할 일의 제거할 tag index
   * @returns {void}
   */
  deleteTag() {}

  /**
   * 특정 할 일의 모든 태그를 제거
   * @param {number} todoIndex - 모든 tag를 제거할 특정 할일의 index
   * @returns {void}
   */
  deleteAllTag() {}

  /**
   * 특정 할일 아이디 찾기
   * @param {number} id - 할일 아이디
   * @returns {number} 할일의 index
   */
  #findTodoIndex() {}

  /**
   * content 값이 필수로 들어갔는지 검사
   * @param {string} [content]
   * @returns {void}
   * @throws {Error} When content empty cannot create todo
   */
  #verifyContent() {}
}

module.exports = TodoList;
