import mongoose, {Schema} from "mongoose";

// npm i mongoose-aggregate-paginate-v2
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, // cloudiary url
            required: true, 
        },
        thumbnail:{
            type: String, //cloudinary 
            required: true
        },
        title:{
            type: String, 
            required: true
        },
        description:{
            type: String, 
            required: true
        },
        duration:{
            type: Number, //cloudnary
            required: true
        },
        views:{
            type: Number, 
            default: 0, 
        },
        isPublished: {
            type: Boolean, 
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId, 
            ref:"User"
        }
    },
    {
    timestamps:true
})

//Use aggregate befor exprting
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)