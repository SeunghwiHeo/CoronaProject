const request = require('request');
const fs = require('fs');
const url = "http://api.corona-19.kr/korea/country/new/?serviceKey=88ef6f20503575a458079e5b66364429b"

function RemoveJsonTextAttribute(value,parentElement){
    try{
        var keyNo = Object.keys(parentElement._parent).length;
        var keyName = Object.keys(parentElement._parent)[keyNo-1];
        parentElement._parent[keyName] = value;
    }catch(err){
        console.log(err);
    }
}

exports.data2 = function(){
    request({
        url: url,
        json: true
    }, function(err,res,body){
        if(err){
            console.log(`err => ${err}`)
        }
        else {
            if(res.statusCode == 200){
                const cocoro2 = JSON.stringify(body)
                console.log(cocoro2);
                fs.writeFileSync('coco2.json', cocoro2)   
            }
                
        }
    })

}
