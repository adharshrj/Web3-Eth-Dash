import supabase from "../../../helpers/supabase";
import { v4 as uuidV4 } from 'uuid';

const nonceApi = async (req, res) => {
   
    const { walletAddress, ens } = req.body
    const secret = uuidV4();
    let {data, error} = await supabase.from('users').select('secret').eq('walletAddress', walletAddress);

    if (data.length > 0) {
        let { data , error } = await supabase.from('users').update({secret}).match({walletAddress}).select();
        console.log("Update Data", data, error)
    } else {
          let { data , error } = await supabase.from('users').insert({secret, walletAddress, ens}).select();
          console.log("create data", data, error)
    }
    
    console.log("data", data);
    console.log("error", error);

    if (error) {
        res.status(400).json({error: error.message})
    } else {
        res.status(200).json({secret})
    }
}

export default nonceApi;