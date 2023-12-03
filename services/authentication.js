const JWT=require('jsonwebtoken');
const secret="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ910";

function createTokerForUseuser(user){
    const payload={
        _id:user.id,
        email:user.email,
        profileImgeURL:user.profileImgeURL,
        role:user.role,
    };
    const token=JWT.sign(payload,secret);
    return token;
}

function validateToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}

module.exports={createTokerForUseuser,validateToken};