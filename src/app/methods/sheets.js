const postToGGSheets = async (body) => {
    // Read the body as text (since you're sending x-www-form-urlencoded)
    const res = await fetch(secrets.NEXT_PUBLIC_SHEETS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body
    });
    return res;
}

export { postToGGSheets }