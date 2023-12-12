const createElemWithText = (tagName = "p", content = "", className = "") => {
    const newElement = document.createElement(tagName);
    const textContent = document.createTextNode(content);
    
    if (className !== "") {
        newElement.classList.add(className);
    };

    newElement.appendChild(textContent);

    return newElement;
};

const testData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ];

const createSelectOptions = (jsonData = undefined) => {
  if (jsonData === undefined) return;

  const optionArray = [];
  jsonData.forEach ((user) => {
    let option = document.createElement("option");

    option.value = user.id;
    option.textContent = user.name;

    optionArray.push(option);
  });

  return optionArray
};

const toggleCommentSection = (postId) => {
  if (!postId) return;

  const section = document.querySelector(`section[data-post-id="${postId}"]`);
  if (!section) return null;

  section.classList.toggle("hide");

  return section;
};

const toggleCommentButton = (postId) => {
  if (!postId) return;

  const button = document.querySelector(`button[data-post-id="${postId}"]`);
  if (!button) return null;

  button.textContent = (button.textContent == "Show Comments") ? "Hide Comments"
  : (button.textContent == "Show Comments") ? "Show Comments" : "Show Comments";

  return button;
};

const deleteChildElements = (parentElement) => {
  if (!parentElement?.tagName) return;

  //const parent = document.querySelector(parentElement);
  //let child = parent.lastElementChild;

  let child = parentElement.lastElementChild;

  while (child) {
    //parent.removeChild(child);
    parentElement.removeChild(child);
    //child = parent.lastElementChild;
    child = parentElement.lastElementChild;
  }

  //return parent;
  return parentElement;
};

const addButtonListeners = () => {
  const buttonsList = document.querySelectorAll("main button");
  if (buttonsList.length === 0) return buttonsList;

  for (const button of buttonsList)  {
    let id = button.dataset.postId;
    if (id) {
      button.addEventListener("click", function (e) {toggleComments(e, id)}, false);
    }
  };

  return buttonsList;
}

const removeButtonListeners = () => {
  const buttonsList = document.querySelectorAll("main button");
  if (buttonsList.length === 0) return buttonsList;

  // CHECK LATER AFTER FINISHING TOGGLECOMMENTS

  buttonsList.forEach((button) => {
    let postId = null;
    postId = button.dataset.id;
    if (postId) {
      button.removeEventListener("click", () => {
        toggleComments(postId);
      });
    }
  })

  return buttonsList;
};

const createComments = (jsonComments) => {
  if (!jsonComments) return;
  //const comments = JSON.parse(jsonComments);

  const fragment = document.createDocumentFragment();

  jsonComments.forEach((comment) => {
    const article = document.createElement("article");
    const h3 = createElemWithText('h3', comment.name);
    const p = createElemWithText('p', comment.body);
    const p2 = createElemWithText('p', `From: ${comment.email}`);
    article.append(h3, p, p2);
    fragment.append(article);
  })

  return fragment;
};

const populateSelectMenu = (jsonData) => {
  if (!jsonData) return;

  const selectMenu = document.querySelector("#selectMenu");
  const options = createSelectOptions(jsonData);

  options.forEach((option) => {
    selectMenu.append(option);
  })

  return selectMenu;
};

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users;
  } catch (err) {
    console.error(err)
  }
};

// 11
const getUserPosts = async (userId) => {
  if (!userId) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();

    return posts;
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (userId) => {
  if (!userId) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    return user;
  } catch (err) {
    console.error(err);
  }
};

// 13
const getPostComments = async (postId) => {
  if (!postId) return;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const post = await response.json();

    return post;
  } catch (err) {
    console.error(err);
  }
};

// 14 need to be async
const displayComments = async (postId) => {
  if (!postId) return;

  const section = document.createElement("section");
  section.dataset.postId = postId;
  section.classList.add("comments", "hide");

  const comments = await getPostComments(postId);
  const fragments = createComments(comments);

  section.append(fragments);

  return section;
};

const createPosts = async (posts) => {
  if (!posts) return;
  const fragment = document.createDocumentFragment();

  for (const post of posts) {
    const article = document.createElement("article");
    const h2 = createElemWithText("h2", post.title);
    const p = createElemWithText("p", post.body);
    const p2 = createElemWithText("p", `Post ID: ${post.id}`);
    const author = await getUser(post.userId);
    const p3 = createElemWithText("p", `Author: ${author.name} with ${author.company.name}`);
    const p4 = createElemWithText("p", `${author.company.catchPhrase}`);
    const button = createElemWithText("button", "Show Comments");
    button.dataset.postId = post.id;
    article.append(h2, p, p2, p3, p4, button);

    const section = await displayComments(post.id);
    article.append(section);

    fragment.append(article);
  }
  return fragment;
};

const displayPosts = async (posts) => {
  const main = document.querySelector("main");

  const element = posts ? await createPosts(posts) : createElemWithText("p", "Select an Employee to display their posts.", "default-text");
  
  main.append(element);
  return element;
};

const toggleComments = (event, postId) => {
  if (!event || !postId) return;
  event.target.listener = true;
  const section = toggleCommentSection(postId);
  const button = toggleCommentButton(postId);

  return [section, button];
};

const refreshPosts = async (data) => {
  if (!data) return;

  const mainElement = document.querySelector("main");

  const removeButtons = removeButtonListeners();
  const main = deleteChildElements(mainElement);
  const fragment = await displayPosts(data);
  const addButtons = addButtonListeners();
  console.log(addButtons);

  return [removeButtons, main, fragment, addButtons];
};

const selectMenuChangeEventHandler = async (event) => {
  if (!event) return;
  const selectMenu = document.getElementById("selectMenu");
  selectMenu.disabled = true;

  const userId = event?.target?.value || 1;
  const posts = await getUserPosts (userId);
  const refreshPostsArray = await refreshPosts(posts);

  selectMenu.disabled = false;

  return [userId, posts, refreshPostsArray];
};

const initPage = async () => {
  const users = await getUsers();
  const select = populateSelectMenu(users);

  return [users, select];
};

const initApp = () => {
  initPage();
  const selectMenu = document.getElementById("selectMenu");
  selectMenu.addEventListener("change", selectMenuChangeEventHandler, false);

};

document.addEventListener("DOMContentLoaded", initApp, false);