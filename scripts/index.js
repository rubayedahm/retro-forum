const loadBlogPosts = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json()
    const posts = data.posts;
    showBlogDetails(posts);   
}

// Latest post data
const loadLatestPosts = async() => {
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    showLatestPosts(data);
}

// loadBlogPosts()
loadLatestPosts()

const showBlogDetails = (blog) => {
    console.log(blog.posts)
    const cardContainer = document.getElementById('card-container');

    blog.posts.forEach( data => {
        const div = document.createElement('div')
        div.classList = 'card';
        
        div.innerHTML = `
        <div class="card-body bg-[#F3F3F5] my-4 rounded-lg">
        <div class="flex gap-2">
        <div class="avatar online mr-4">
        <div class="w-16 rounded">
        <img
        src="${data?.image}"
        alt="Tailwind-CSS-Avatar-component" />
        </div>
        </div>
        <div>
        <span># ${data?.category}</span>
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
        <div class="self-center">
        <button onclick="showPostTitle()" class="bg-[#10B981] rounded-full py-1 px-2 text-white"><i class="fa-regular fa-envelope""></i></button>
        </div>
        </div>
        </div>
        </div>`
        
        cardContainer.appendChild(div);
        // if(data.category === "Comedy") {
        // }
        
        
    })
}

const showLatestPosts = (posts) => {
    const cardContainer = document.getElementById('latest-card-container');

    posts.forEach(post => {
        const div = document.createElement('div');
        div.classList = 'card bg-base-100 w-90 shadow-xl';

        div.innerHTML = `
             <figure>
                      <img
                        src="${post?.cover_image}"
                        alt="" />
                    </figure>
                    <div class="card-body">
                        <h4 class="flex items-center gap-3 text-[#12132D99]"><i class="fa-regular fa-calendar"></i> ${post?.author?.posted_date || "No date found"} </h4>
                      <h2 class="card-title text-lg font-bold">${post?.title}</h2>
                      <p class="text-[#12132D99] text-sm">${post?.description}</p>

                      <div class="card-actions flex items-center mt-3">
                        <div class="avatar mr-4">
                            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                              <img src="${post?.profile_image}" />
                            </div>
                          </div>
                        <div>
                            <h3 class="text-lg font-bold">${post?.author?.name}</h3>
                            <span>${post?.author?.designation}</span>
                        </div>
                      </div>
                    </div>
        `;
        cardContainer.appendChild(div);

    })
}


const searchBtn = () => {
    const searchInputValue = document.getElementById('search-input');
    const searchText = searchInputValue.value;
    loadDataByCategory(searchText)
    
}

const loadDataByCategory = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    showBlogDetails(data)
}

const showPostTitle = () => {
    console.log("Clicked")
}