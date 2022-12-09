import { ethers } from "ethers";
import supabase from "../../../helpers/supabase";
import jwt from "jsonwebtoken";

const walletApi = async (req, res) => {
    try {
        const {walletAddress, signature, secret} = req.body;
        const signerAddress = ethers.utils.verifyMessage(secret, signature);

        console.log("Signer Address", signerAddress)

        let { data: user } = await supabase.from('users').select('*').eq('walletAddress', walletAddress).eq('secret', secret).single();

        const token = jwt.sign({
            "aud": "authenticated",
            "exp": Math.floor((Date.now() / 1000) * (60*60)),
            "sub": user.id,
            "user_metadata": {
                id: user.id, 
            },
            "role": "authenticated"
        }, process.env.SUPABASE_JWT_SECRET)

        res.status(200).json({user, token})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

export default walletApi;