data = '{"name":"mkyong",'+
        '"age":30,'+
        '"address":{"street":"XYZstreet",'+
                    '"city":"HYD",'+
                    '"phoneNumber":[{"type":"home","number":"1234567890"},{"type":"fax","number":"0987654321"}]}}';


let obj=JSON.parse(data);

console.log(obj["name"]);   // mkyong
console.log(obj["address"].street);  // XYZstreet
console.log(obj["address"].phoneNumber[1].number);  // 0987654321


