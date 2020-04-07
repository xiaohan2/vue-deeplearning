import {request} from './request.js'

export function getPredictImage(){
  return request({
    url:'/user'
  })
}
