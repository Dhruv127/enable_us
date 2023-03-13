const mongoose = require('mongoose');
const mongourl='mongodb://DhruvAgarwal:Hanumank@ac-3fdlkck-shard-00-00.6fhq1hk.mongodb.net:27017,ac-3fdlkck-shard-00-01.6fhq1hk.mongodb.net:27017,ac-3fdlkck-shard-00-02.6fhq1hk.mongodb.net:27017/shopdetails?ssl=true&replicaSet=atlas-137w48-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB =async() =>{
    await mongoose.connect(mongourl, { useNewUrlParser: true },async(err, result)=>{
    if(err) console.log("---", err)
    else{
    console.log("connected"); 
    const fetched_data = await mongoose.connection.db.collection ("shop_details");
    fetched_data.find({}).toArray (function(err, data) {
        
    if(err) console.log(err);
    else{
        global.shop_details=data;
        console.log(global.shop_details)
    };
    })
    }
});

}
module.exports=mongoDB;

