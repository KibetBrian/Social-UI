export interface IUser {
    _id: string,
    userName: string
    email: string
    following: []
    followers: []
    profilePicture: string
    createdAt: Date
    updatedAt: Date,
    __v:number
}

export interface IPost {
    _id: string,
    userId: string
    description: string
    image: string
    likes: []
    comments: []
    createdAt: Date
}

export interface IComment{
    _id: string
    postId: string
    userId: string
    comment: string
    createdAt: string
}