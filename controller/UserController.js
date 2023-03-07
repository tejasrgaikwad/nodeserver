import User from '../model/Users.js'

export const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        return res.json(users);
    } catch(e)
    {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
}



export const addUsers = async (req, res) => {
    try{
        console.log('request = ', req.body);
        const user = new User(req.body);
        // console.log('user=', user);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch(e)
    {
        console.log(e);
        return res.status(500).json({message: e.message});
    }
}