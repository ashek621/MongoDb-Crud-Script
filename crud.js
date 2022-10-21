var MongoClient=require('mongodb').MongoClient;
var URL="mongodb+srv://ashekdemo:vxLsXCLjfy4o2zMB@cluster0.dmoycrj.mongodb.net/?retryWrites=true&w=majority";
var Config={useUnifiedTopology:'True'};

MongoClient.connect(URL,Config,function (error,MyMongoClient){
    if(error){
        console.log("Connection Failed!!")
    }
    else{
        console.log("Connection Success!!")
        // InsertData(MyMongoClient);
        // FindOneWithOutCondition(MyMongoClient)
        // FindOneWithCondition(MyMongoClient)
        // FindAllData(MyMongoClient)
        // UpDateData(MyMongoClient)
        // DeleteOneItem(MyMongoClient)
        DeleteAllData(MyMongoClient)
    }
});


//CreateData:-

function  InsertData(MyMongoClient){
    var MyDAtaBase=MyMongoClient.db('TechCompany');
    var MyCollection=MyDAtaBase.collection('Information');
    var CompanyDAta=
                  {CompanyName:'Apple',Founder:'Steve Jobs',Year:'1976',AnnualRevenue:'365.87B USD',Origin:'USA',}

        //            {CompanyName:'Google',Founder:'Larry Page,Sergey Brin ',Year:'1998',AnnualRevenue:'256.7B USD',Origin:'USA',}
        //             {CompanyName:'MicroSoft',Founder:'Bill Gates ',Year:'1975',AnnualRevenue:'198.27B USD',Origin:'USA',}
        //            {CompanyName:'FaceBook',Founder:'Mark Zukarbarg Jobs',Year:'2004',AnnualRevenue:'117.9B USD',Origin:'USA',}
        //             {CompanyName:'Amazon',Founder:'Jeff Bezos',Year:'1994',AnnualRevenue:'485.902B USD',Origin:'USA',}

    MyCollection.insertOne(CompanyDAta,function (error){
        if(error){
            console.log("Data Insert Fail!")
        }
        else{
            console.log('Data Insert Success!')
        }
    })
}

//Data Read:-

//FindOneWithOutCondition:-

function  FindOneWithOutCondition(MyMongoClient){
    var MyDAtaBase=MyMongoClient.db('TechCompany');
    var MyCollection=MyDAtaBase.collection('Information');

    var clue={};

    MyCollection.findOne(clue,function (error,result){
        console.log(result);
    })

}

//FindOneWithCondition:-

function  FindOneWithCondition(MyMongoClient){
    var MyDAtaBase=MyMongoClient.db('TechCompany');
    var MyCollection=MyDAtaBase.collection('Information');

    var clue={Year: '2004'};

    MyCollection.findOne(clue,function (error,result){
        console.log(result);
    })

}

//FindAll Data:-

function  FindAllData(MyMongoClient){
    var MyDAtaBase=MyMongoClient.db('TechCompany');
    var MyCollection=MyDAtaBase.collection('Information');

    MyCollection.find().toArray(function (error,result){
        console.log(result);
    })

}

//UpDate DAta:-

function  UpDateData(MyMongoClient){
    var MyDAtaBase=MyMongoClient.db('TechCompany');
    var MyCollection=MyDAtaBase.collection('Information');

    var clue={Year:'2004'}
    var newData={$set: {Founder: "Kazi AShek"}}

    MyCollection.updateOne(clue,newData, function (error,result){
        console.log(result);
    })

}

//DeleteData:*

//DeleteOne:-

function  DeleteOneItem(MyMongoClient){
    var MyDAtaBase=MyMongoClient.db('TechCompany');
    var MyCollection=MyDAtaBase.collection('Information');

    var clue={Year:'2004'}


    MyCollection.deleteOne(clue, function (error){

        if(error){
            console.log("Data Delete Failed!");
        }
        else {
            console.log("Data Delete Success!")
        }
        }
    )

}

//DeleteAllData:-

function  DeleteAllData(MyMongoClient){
    var MyDAtaBase=MyMongoClient.db('TechCompany');
    var MyCollection=MyDAtaBase.collection('Information');

    MyCollection.deleteMany( function (error,ResultObj){

            if(error){
                console.log("Data Delete Failed!");
            }
            else {
                console.log("Data Delete Success!!")
            }
        }
    )

}

