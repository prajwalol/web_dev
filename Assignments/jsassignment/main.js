document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("colorPicker");
  const colorBox = document.getElementById("colorBox");

  colorPicker.addEventListener("input", (event) => {
    colorBox.style.backgroundColor = event.target.value;
    colorBox.textContent = "Selected Color";
  });

  function getUser(id, callback) {
    setTimeout(() => {
      callback({ id: id, name: "Ram" });
    }, 2000);
  }

  function getPosts(userId, callback) {
    setTimeout(() => {
      callback(["post1", "post2"]);
    }, 1000);
  }

  function getComments(post, callback) {
    setTimeout(() => {
      callback(["nice", "good"]);
    }, 800);
  }

  const callbackOutput = document.getElementById("callbackOutput");
  getUser(1, (user) => {
    callbackOutput.textContent = `User: ${user.name}`;
  });

  const callbackHellOutput = document.getElementById("callbackHellOutput");
  getUser(1, (user) => {
    callbackHellOutput.textContent = "User fetched\n";

    getPosts(user.id, (posts) => {
      callbackHellOutput.textContent += "Posts fetched\n";

      getComments(posts[0], (comments) => {
        callbackHellOutput.textContent += "Comments fetched\n\n";
        callbackHellOutput.textContent += `User: ${JSON.stringify(user)}\nPosts: ${JSON.stringify(posts)}\nComments: ${JSON.stringify(comments)}`;
      });
    });
  });

  function getUserPromise(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          resolve({ id: id, name: "Ram" });
        } else {
          reject(new Error("User not found"));
        }
      }, 2000);
    });
  }

  const promiseOutput = document.getElementById("promiseOutput");
  getUserPromise(1)
    .then((user) => {
      promiseOutput.textContent = `User: ${user.name}`;
      return user;
    })
    .catch((error) => {
      promiseOutput.textContent = error.message;
    });

  function getPostsPromise(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId) {
          resolve(["post1", "post2"]);
        } else {
          reject(new Error("Posts not found"));
        }
      }, 1000);
    });
  }

  function getCommentsPromise(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (post) {
          resolve(["nice", "good"]);
        } else {
          reject(new Error("Comments not found"));
        }
      }, 800);
    });
  }

  async function showData() {
    const asyncOutput = document.getElementById("asyncOutput");

    try {
      const user = await getUserPromise(1);
      const posts = await getPostsPromise(user.id);
      const comments = await getCommentsPromise(posts[0]);

      asyncOutput.textContent = `User fetched\nPosts fetched\nComments fetched\n\nUser: ${JSON.stringify(user)}\nPosts: ${JSON.stringify(posts)}\nComments: ${JSON.stringify(comments)}`;
    } catch (error) {
      asyncOutput.textContent = error.message;
    }
  }

  showData();
});
