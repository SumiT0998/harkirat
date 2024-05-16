const jwt = require("jsonwebtoken");
const jwtpassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username); // genrating tokennnn
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign({ username }, jwtpassword);
  console.log("login sucessfull");
  return signature;
}

// console.log(signJwt("sumit@ss.com", "12dasdasds"));        sign in

const tkn = signJwt("sumit.bisht@gmail.com", "asdasdasdasdasdas");
console.log(tkn);
//decoded not verified

function decodeJwt(token) {
  //decoding token here
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
console.log(decodeJwt(tkn));

function verifyJwt(token) {
  try {
    const verified = jwt.verify(token, jwtpassword);
    if (verified) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log("not able to verify");
  }
}

console.log(verifyJwt(tkn));
