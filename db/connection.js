import mongoose from "mongoose";

mongoose.connect(/* 'mongodb://localhost/calories' */ "mongodb+srv://joseapadilla99:VVavFrSvRfZLRROd@cluster0.zrt4jyc.mongodb.net/calorie-trakr?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
//swap for local and deployment

export default mongoose