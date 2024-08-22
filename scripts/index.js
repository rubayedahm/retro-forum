const loadBlogPosts = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json()
    const posts = data.posts;
    showBlogDetails(posts)    
}

loadBlogPosts()

const showBlogDetails = (blog) => {
    const cardContainer = document.getElementById('card-container');

    blog.forEach( data => {
        console.log(data)
        const div = document.createElement('div')
        div.classList = 'card'
        div.innerHTML = `
        <div class="card-body bg-[#F3F3F5] my-4 rounded-lg">
                        <div class="flex gap-2">
                        <div class="avatar mr-4">
                        <div class="w-16 rounded">
                            <img
                            src="${data?.image}"
                            alt="Tailwind-CSS-Avatar-component" />
                        </div>
                        </div>
                          <div>
                            <h2 class="card-title">${data?.title}</h2>
                            <p class="text-[#12132D99] mt-3">${data?.description}</p>
                          </div>
                        </div>
                        <div class="border my-4 border-dotted"></div>
                        <div class="card-actions justify-end">
                          <div class="stats gap-4 bg-[#F3F3F5]">
                            <div class="stat">
                              <div class="stat-figure text-primary">${data?.comment_count}</div>
                              <div class="stat-title">Comments</div>
                            </div>
                            <div class="stat">
                              <div class="stat-figure text-secondary">${data?.view_count}</div>
                              <div class="stat-title">Views</div>
                            </div>
                            <div class="stat">
                              <div class="stat-figure text-accent">${data?.posted_time} min</div>
                              <div class="stat-title">Read</div>
                            </div>
                          </div>
                        </div>
                      </div>`

                      cardContainer.appendChild(div)
    })
}