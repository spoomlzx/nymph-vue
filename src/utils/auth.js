import { get, set, remove } from 'tiny-cookie'

const TokenKey = 'Stoken';

export function getToken() {
  return get(TokenKey)
}

export function setToken(token) {
  return set(TokenKey, token)
}

export function removeToken() {
  return remove(TokenKey)
}
