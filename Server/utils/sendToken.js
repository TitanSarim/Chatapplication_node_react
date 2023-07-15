function setTokenCookie(res, token) {

    const options = {

      expires: new Date(

        Date.now() + process.env.EXPRIED_COOKIES * 24 * 60 * 60 * 1000

      ),

      //httpOnly: true,
      // secure: true,

    };

    res.cookie('token', token, options);
    
  }
  
  module.exports = setTokenCookie;