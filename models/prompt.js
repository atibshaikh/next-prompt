import mongoose, {Schema, model, models } from "mongoose";

const PromptSchema = new Schema ({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    prompt:{
        type: String,
        required:[true, 'Promptis required'],
    },
    tag:{
        type: String,
        required:[true, 'Promptis required'],
    },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);


export default Prompt;