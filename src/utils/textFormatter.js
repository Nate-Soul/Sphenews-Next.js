export const dateFormatter = (timestamp) => {
    const formattedDate = new Date(timestamp).toLocaleDateString('en-US', {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    return formattedDate;
};

export const linebreaksToBr = (content) => {
    return content.replace("\\r\\n", "<br>");
};