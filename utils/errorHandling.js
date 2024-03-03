
export const  asyncHndler = (fn) =>{
    return (req,res,next)=>{
        fn (req,res,next).catch(error=>{
         next(new Error (error.message,
            {cause:500}))
        })
    }}

    export  const golbalErrorhandling = (err,req,res,next)=>{
        // if(!error)return next()
         res
        .status(400)
        .json({message:err.message, stack : err.stack})
        } 