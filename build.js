const fs = require("fs");
const https = require("https");
const process = require("process");

// 安全地加载环境变量
try {
  require("dotenv").config();
} catch (error) {
  console.log("dotenv not available, using process.env directly");
}

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

console.log("Starting build process...");

// 如果没有配置GitHub数据，创建默认的空文件
if (USE_GITHUB_DATA !== "true" || !GITHUB_TOKEN || !GITHUB_USERNAME) {
  console.log("GitHub data not configured, creating empty profile.json");
  const emptyProfile = {
    data: {
      user: {
        name: null,
        bio: null,
        avatarUrl: null,
        location: null,
        pinnedItems: {
          totalCount: 0,
          edges: []
        }
      }
    }
  };
  
  fs.writeFileSync("./public/profile.json", JSON.stringify(emptyProfile, null, 2));
} else {
  // 执行GitHub数据获取
  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  const data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(options, res => {
    let responseData = "";

    console.log(`GitHub API statusCode: ${res.statusCode}`);
    
    res.on("data", d => {
      responseData += d;
    });
    
    res.on("end", () => {
      if (res.statusCode === 200) {
        fs.writeFileSync("./public/profile.json", responseData);
        console.log("GitHub profile data saved to public/profile.json");
      } else {
        console.log("GitHub API request failed, using empty profile");
        const emptyProfile = {
          data: {
            user: {
              name: null,
              bio: null,
              avatarUrl: null,
              location: null,
              pinnedItems: { totalCount: 0, edges: [] }
            }
          }
        };
        fs.writeFileSync("./public/profile.json", JSON.stringify(emptyProfile, null, 2));
      }
    });
  });

  req.on("error", error => {
    console.log("GitHub request error:", error.message);
    const emptyProfile = {
      data: {
        user: {
          name: null,
          bio: null,
          avatarUrl: null,
          location: null,
          pinnedItems: { totalCount: 0, edges: [] }
        }
      }
    };
    fs.writeFileSync("./public/profile.json", JSON.stringify(emptyProfile, null, 2));
  });

  req.write(data);
  req.end();
}

// 处理Medium博客数据
if (!MEDIUM_USERNAME) {
  console.log("Medium username not configured, creating empty blogs.json");
  const emptyBlogs = {
    status: "ok",
    feed: {
      title: "",
      description: ""
    },
    items: []
  };
  fs.writeFileSync("./public/blogs.json", JSON.stringify(emptyBlogs, null, 2));
} else {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`Medium API statusCode: ${res.statusCode}`);
    
    res.on("data", d => {
      mediumData += d;
    });
    
    res.on("end", () => {
      if (res.statusCode === 200) {
        fs.writeFileSync("./public/blogs.json", mediumData);
        console.log("Medium blogs data saved to public/blogs.json");
      } else {
        console.log("Medium API request failed, using empty blogs");
        const emptyBlogs = {
          status: "ok",
          feed: { title: "", description: "" },
          items: []
        };
        fs.writeFileSync("./public/blogs.json", JSON.stringify(emptyBlogs, null, 2));
      }
    });
  });

  req.on("error", error => {
    console.log("Medium request error:", error.message);
    const emptyBlogs = {
      status: "ok",
      feed: { title: "", description: "" },
      items: []
    };
    fs.writeFileSync("./public/blogs.json", JSON.stringify(emptyBlogs, null, 2));
  });

  req.end();
}

console.log("Build preparation completed!"); 