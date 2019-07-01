import {Http} from '../utils/http.js'

export class LikeModel extends Http{
    like(state, artId, artType){
        this.request({
            url: state === 'like'? 'like': 'like/cancel',
            method: "POST",
            data: {
                art_id: artId,
                type: artType
            }
        })
    }
}