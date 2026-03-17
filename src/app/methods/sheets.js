const postToGGSheets = async (request) => {
    // Read the body as text (since you're sending x-www-form-urlencoded)
    const res = await fetch(request.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: request.body
    });
    return res;
}

export { postToGGSheets }