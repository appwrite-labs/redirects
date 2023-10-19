import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    const createRedirect = (url: string) => response.redirect(301, url + (request.url ?? ""));
    switch (request.headers["x-forwarded-host"]) {
        case "appwrite.online":
        case "is.appwrite.online":
        case "status.appwrite.io":
            return createRedirect("https://www.appwrite.online");
        case "careers.appwrite.io":
            return createRedirect("https://www.appwrite.careers");
        case "storage.appwrite.io":
            return createRedirect("https://appwrite.store");
        default:
            return createRedirect("https://www.appwrite.io");
    }
}
