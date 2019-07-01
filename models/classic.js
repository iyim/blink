import {Http} from '../utils/http.js'

export class ClassicModel extends Http{
  getLatest(callback){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        callback(res)
      }
    })
  }
}