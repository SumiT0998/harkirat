const zod = require("zod");

// function validateinput(arr) {           with array of data
//   const schema = zod.array(zod.number());
//   const response = schema.safeParse(arr);
//   console.log(response);
// }

// validateinput([1, 2, 4]);


function validateinput(obj){
    const schema = zod.object({ 
        email: zod.string().email() ,
        password:zod.string().min(8)
    
    });

    const response =schema.safeParse(obj);
    console.log(response);


}
validateinput({email:"sumit@bisht.com",password:"36Sumit@123"})

