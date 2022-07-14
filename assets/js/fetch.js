const port = 3002;

const fetchPost = async (title) => {
    const response = await fetch(`http://localhost:${port}/posts/${title}`)
    const post = await response.json();
    return post;

}

const fetchToCreatePost = async (title, name, story, url, picture) => {
    const options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, name, story, url, picture })
    }
    const response = await fetch(`http://localhost:${port}/posts`, options);
}
