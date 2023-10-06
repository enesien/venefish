import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    res.status(200).json({
        "type": "service_account",
        // ... rest of your firebase config
    })

}

