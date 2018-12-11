import request from "../utils/request";

export function addFile(data, name) {
  return request({
    url: '/app/file/add',
    method: 'post',
    params: { name },
    data
  })
}

export function getFileById(id) {
  return request({
    url: '/app/file/' + id,
    method: 'get'
  })
}

export function getTypes() {
  return request({
    url: '/app/types/list',
    method: 'get'
  })
}

export function addProcess(data) {
  return request({
    url: '/app/file/add',
    method: 'post',
    data
  })
}
