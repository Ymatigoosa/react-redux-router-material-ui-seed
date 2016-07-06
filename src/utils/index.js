/**
 * Tests is string is null or contains only whitespace characters
 * @param  {String}  str string to check
 * @return {Boolean}     true if string is null or undefined or contains only whitespace characters
 */
export function isNullOrWhitespace ( str ) {
    if (typeof str === 'undefined' || str == null)
      return true;

    return str.replace(/\s/g, '').length < 1;
}

/**
 * Inserts an element between each elements in array
 * @example
 * const a = intersperse([1, 2, 3], 0);
 * // a = [1, 0, 2, 0, 3]
 * @param  {Array} array     target array
 * @param  {Object} something element which must be inserted
 * @return {Array}           new array
 */
export function intersperse(array, something) {
  if (array.length < 2) { return array }
  var result = [], i = 0, l = array.length
  if (typeof something == 'function') {
    for (; i < l; i ++) {
      if (i !== 0) { result.push(something()) }
      result.push(array[i])
    }
  }
  else {
    for (; i < l; i ++) {
      if (i !== 0) { result.push(something) }
      result.push(array[i])
    }
  }
  return result
}

/**
 * Creates reducer
 * @example
 * import { createReducer } from 'utils';
 * import ActionTypes from 'actions/someActions';
 *
 * const initialState = {
 *  a: 0
 * };
 *
 * export default createReducer(initialState, {
 * 	[ActionTypes.ADD]: (state, action) => {
 *  	return { a: state.a + action.payload };
 *   }
 * });
 * @param  {Object} initialState initial state object
 * @param  {Object.<string, ActionHandler>} handlers object with action handlers
 * @return {Object} reducer
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

/**
 * Creates consts for action types
 * @example
 * const ActionTypes = createActionTypes('db/', {
 *   SUBSCRIPTION_UPDATE: null,
 *   SUBSCRIPTION_ERROR: null
 * });
 * @param  {String} namespace prefix for consts
 * @param  {Object.<string, Object>} obj       hash map like { Action1: null, Action2: null}
 * @return {Object}           new object like { Action1: 'namespaceAction1', Action2: 'namespaceAction2'}
 */
export function createActionTypes(namespace, obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = namespace + key;
    }
  }
  return ret;
}

/**
 * Action handler
 * @callback ActionHandler
 * @param {Object} state current state (or sub-state for nested reducers)
 * @param {Object} action action to handle
 * @return {Object} new state (must be new ref)
 */
