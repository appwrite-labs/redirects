import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    switch (request.headers["x-forwarded-host"]) {
        case "appwrite.online":
        case "is.appwrite.online":
        case "status.appwrite.io":
            return response.redirect(301, "https://www.appwrite.online");
        case "careers.appwrite.io":
            return response.redirect(301, "https://www.appwrite.careers");
        case "storage.appwrite.io":
            return response.redirect(301, "https://appwrite.store");
        default:
            return response.redirect(301, "https://www.appwrite.io");
    }
}
