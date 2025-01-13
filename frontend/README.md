# Frontend

This project is built using Next.js, TailwindCSS, and a suite of other modern web development tools. It is designed to provide a powerful, efficient, and scalable frontend architecture for web applications.

## Features

- Next.js for server-side rendering and static site generation.
- Tailwind CSS for utility-first CSS.
- React Icons for easily implementing icons.
- ECharts for rich charting and data visualization.
- Axios for promise-based HTTP requests.
- AOS for animate on scroll functionality.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. This project was built with Node.js version 14.x or higher and npm version 6.x or higher.

Easy to start is to run the script (`setup.sh`), which will detect the requirements and install all packages for you.


### install all packages

```bash
npm install
```

### run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Test

To run lint checks:
```
npm run lint
```

```
npm test
```

### Building for production

```
npm run build
```

To start the production server:
```
npm start
```


## Implementation
All pages are under the basic layout, which is `/src/app/layout.tsx`

When the folder is name included with `()`, then the name of that folder would NOT add to the URI. Thus, we use folders like `(default)`, `(auth)`, `(dashboard)`, and `(search)` to categorize different feature pages. Without `()`, the characters inside will be added to the path. Then, directing to a different URI.

- The home page is under `(default)` folder and the layout of the home includes header and footer sections.
- The sign in and signup pages are under `(auth)` folder, and the layout includes header and footer sections.
- The user dashboard page is under `(dashboard)` folder, and the layout does NOT include header and footer sections.
  - These pages are only accessible at least having a registered user authority.
  - `/profile`: where the user can find their personal information (WIP)
  - `/resourcelist`: where the user can edit or delete the uploaded resources, including modifying the exact information for the resource, i.e. title, DOI, authors, ...
    - In this case, the accuracy can be increased by the user manually
  - `/upload`: where the user can upload one or multiple files
    - Currently, only supports PDF format
- The result of searching can be found in `(search)` folder
  - `/`search`: which shows the article lists and the graph depending on the category and the information the user typed in.
    - Category: Title/DOI, Author, Keyword
- All components are in `src/app/components` folder
  - Header
  - Footer
  - Hero
  - Logo: the logo in the header
  - Modal: popup window
  - SearchBar: the search bar with categories and a search button
  - Table: showing the article in the card list view
  - Graph: showing the graph based on the articles and category it has got


## Preview

### Homepage
![home](/docs/imgs/home.png)
with logged in user:
![home](/docs/imgs/home_login.png)


### User Authentication
#### Login
![login](/docs/imgs/login.png)

#### Register
![register](/docs/imgs/register.png)

### Search Result

#### Refernces
![references](/docs/imgs/citations.png)

#### Links between Authors
![author](/docs/imgs/result_search_auhtor.png)

#### Grouping based on keywords
![grouping](/docs/imgs/result_cluster.png)


### Dashboard
![profile](/docs/imgs/profile.png)

#### Resouce List
![resourcelist](/docs/imgs/resourcelist.png)

While editing:
![resourcelist](/docs/imgs/resourcelist_edit.png)

While searching:
![resourcelist](/docs/imgs/resourcelist_search.png)


#### Upload
![upload](/docs/imgs/upload_doc.png)

While uploading:
![uploading](/docs/imgs/uploading.png)





## Contributionng

Please follow the instructions in `docs/workflow`

