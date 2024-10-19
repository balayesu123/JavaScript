let text = 
          '{"employee":['+
                        '{"fname":"john","lname":"Doe"},'+
                        '{"fname":"Anna","lname":"smith"},'+
                        '{"fname":"Peter","lname":"Jones"}]}';

let obj=JSON.parse(text);

console.log(obj.employee[0].fname);  // john
console.log(obj.employee[1].lname);  // smith
console.log(obj.employee[2].lname);  // Jones


