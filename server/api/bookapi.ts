import axios from "axios";
import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

export default async (req: IncomingMessage, res: ServerResponse) => {
    const query = url.parse(req.url as string, true).query;
    let { bookQuery } = query;
    let responseData = { data: [{ data: "" }] };
    
    if (bookQuery) {
        responseData = await axios.get(`http://localhost:3000/books?bookQuery=${bookQuery}`);
    }

    res.writeHead(200, { "Content-Type": "application/json"});
    res.write(JSON.stringify(responseData.data));
    res.end();
}