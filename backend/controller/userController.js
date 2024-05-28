import UserModel from "../Models/userModel.js";


export const getUser =  async(req,res)=>{
const id = req.params.id;
 try {
    const user = await UserModel.findById(id)

    if(user){
       const {password, ...otherDetails}= user._doc
        res.status(200).json(otherDetails)
    }
    else{
        res.status(404).json("No such user exists")
    }
 } catch (error) {
    res.status(500).json(error)
 }


};

// update a user
export const updateUser= async(req,res)=>{
    const id= req.params.id;
    const{currentUserId, currentUserAdminStatus, password}= req.body
    if(id===currentUserId || currentUserAdminStatus)
        {
            try {
                if(password){

                }



                const user= await UserModel.findByIdAndUpdate(id, req.body, {new: true}) //which user should be update and req.body the info to be updated new:true want the updated user not the previous one
                res.status(200).json(user)
            } catch (error) {
                res.status(500).json(error)
                
            }
        }
        else{
            res.status(403).json("Access Denied! you can only update your own profile")
        }
}
 export const deleteUser = async(req,res)=>{
    const id= req.params.id
    const{ currentUserId, currentUserAdminStatus} = req.body

    if (currentUserId===id || currentUserAdminStatus){

        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("user deleted successfully")
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("Access Denied! you can only delete your own profile")
    }
 }

 //follow a user
 export const followUser = async(req, res)=>{
    const id = req.params.id   //user to be followed

    const {currentUserId}= req.body //who wants to follow

    if (currentUserId===id){
        res.status(403).json("Action forbidden")
    }
    else{
        try {
            const followUser= await UserModel.findById(id)
            const followingUser= await UserModel.findById(currentUserId)

            if(!followUser.followers.includes(currentUserId)){            //if user id is already present in follow user
                         await followUser.updateOne({$push : {followers: currentUserId}})
                         await followingUser.updateOne({$push : {followings : id}})
                         res.status(200).json("User followed!")
            }
            else{
                res.status(403).json("User is already followed by you")
            }
            
        } catch (error) {
            
        }
    }
 }

 //unfollow a user
 export const UnFollowUser = async(req, res)=>{
    const id = req.params.id  

    const {currentUserId}= req.body 

    if (currentUserId===id){
        res.status(403).json("Action forbidden")
    }
    else{
        try {
            const followUser= await UserModel.findById(id)
            const followingUser= await UserModel.findById(currentUserId)

            if(followUser.followers.includes(currentUserId)){            //if user id is already present in follow user
                         await followUser.updateOne({$pull : {followers: currentUserId}})
                         await followingUser.updateOne({$pull : {followings : id}})
                         res.status(200).json("User Unfollowed!")
            }
            else{
                res.status(403).json("User is unfollowed by you")
            }
            
        } catch (error) {
            
        }
    }
 }
