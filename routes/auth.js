const express = require('express')
const passport = require('passport')
const router = express.Router()

//auth with google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//dashboard
router.get('/google/callback', 
passport.authenticate('google', {failureRedirect:'/'}),
(req,res)=>{
    res.redirect('/dashboard')
 }
)

//LOGOUT
router.get('/logout', (req,res,next)=>{
    req.logout( function(err){
      if(err){
        return next(err)
      }
       res.redirect('/')
    })   
})


module.exports = router 