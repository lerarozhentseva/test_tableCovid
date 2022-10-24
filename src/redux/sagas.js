import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_POSTS, REQUEST} from './types.js';

export function* sagaWatcher() {
  yield takeEvery(REQUEST, sagaWorker)
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  return await response.json()
}

function* sagaWorker() {
  try {
    const payload = yield call(getPosts)
    yield put({ type: GET_POSTS, payload })
  } catch (e) {
  }
}

