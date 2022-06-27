export type VideoBody = {
    text: string
    username: string
    profileImg: string
    image?: string
    file?: string
  }
  
  export type CommentBody = {
    comment: string
    videoId: string
    username: string
    profileImg: string
  }
  
  export interface Video extends VideoBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'video'
    blockVideo: boolean
  }
  
  export interface Comment extends CommentBody {
    _createdAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updatedAt: string
    video: {
      _ref: string
      _type: 'reference'
    }
  }

  