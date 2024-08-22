const loadBlogPosts = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json()
    const posts = data.posts;
    showBlogDetails(posts)    
}

loadBlogPosts()

const showBlogDetails = (blog) => {
    const cardContainer = document.getElementById('card-container');
    console.log(blog)
}