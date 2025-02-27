
## Project Scripts

The following scripts are available in this project:

- `dev`: Runs the development server with Turbopack.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to lint the codebase.
- `format`: Runs Prettier to automatically format your code according to the project's style guidelines.


## Installation

To install the project dependencies, run:

```bash
yarn install
```

## Deployment

To deploy the application, follow these steps:

1. Build the application for production:

```bash
yarn build
```

2. Start the production server:

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).


Simple Blog - Junior Frontend Developer Home Work

This project is a simple responsive blog post listing page created using Next.js. It showcases the ability to work with modern frontend technologies, focusing on adaptive layouts, semantic HTML, and SCSS styling. The page displays a list of blog posts with images, titles, descriptions, dates, "Read more" links, view counts, reading time estimations, and optional tags. The data is fetched from a mock API.
Demo

You can view the live project at http://localhost:3000 once you run it locally.
Setup Instructions

To get started with this project:
1. Install dependencies:

yarn install

3. Run the development server:

yarn dev

This will start the development server at http://localhost:3000.


Tech Stack

- Next.js (for routing and data fetching)
- React (functional components, hooks)
- SCSS (organized and maintainable styles)
- TypeScript (optional, but preferred)
- react-pagination (for pagination functionality)
- ESLint (for code linting)
- Prettier (for code formatting)

Features

- Responsive Pages:
    - Implements a grid layout that adapts to various screen sizes.
    - Mobile-first design approach with styling in SCSS.
    - Accessibility considerations (semantic HTML, alt attributes for images).

- Mock API Integration:
    - Uses json-server to simulate a backend and fetch mock data for blog posts.
    - Blog posts include title, image, description, publication date, view count, reading time, and optional tags.

- Pagination:
    - Implements pagination for the blog post listing page using the react-pagination library.

 - "Read More" Button:
    - Clicking on the "Read More" button takes the user to a detailed post page /posts/[id].

- Dark Mode Toggle (Bonus Feature):
    - Users can toggle between dark and light modes, which are handled using React state.

- Dynamic Reading Time (Bonus Feature):
    - Estimated reading time is calculated dynamically based on word count (assuming 200 words per minute).

- Figma Design 
    - This project is based on a free blog design UI kit from the Figma Community. You can find the design here: https://www.figma.com/community/file/1235152009438565697


Approach

- Data Fetching:
    - Used json-server to set up a simple mock API to return blog post data.
    - Fetching data on the client side using React hooks (useEffect and useState).

- Styling:
    - The project is styled using SCSS. I used a mobile-first approach, ensuring the page is responsive on mobile, tablet, and desktop screens.
    - Ensured proper structure with SCSS variables for color theming, font sizes, and breakpoints.

- Routing:
    - Implemented dynamic routing in Next.js for blog posts. Each blog post has its own detail page accessible via /posts/[id].

- Pagination:
    - Used react-pagination to implement simple pagination functionality.

Code Quality

- Used ESLint and Prettier to maintain clean and consistent code formatting throughout the project.

Bonus Features

- Dark Mode Toggle:
    - The dark mode toggle allows users to switch between light and dark themes. The dark theme changes the background and text colors for a better user experience in low-light environments.

- Dynamic Reading Time:
    - The reading time for each post is calculated dynamically based on an average reading speed of 200 words per minute.

- View Counter:
    - A simple view counter is implemented for blog posts. The count increments when the post is viewed, although this is simulated in this implementation.

Evaluation Criteria

- Code structure and readability: Ensured that the code is clean, maintainable, and follows best practices.
- Mobile responsiveness: Used a grid-based layout with SCSS to ensure the page adapts well to various screen sizes.
- Accessibility: Semantic HTML elements were used, including proper alt attributes for images.
- Bonus features: Implemented a dark mode toggle and dynamic reading time calculation.

Submission Guidelines

- Push your code to a public GitHub repository.
- Include a link to the Figma design used.
- Provide a brief explanation of your approach, as well as any bonus features you implemented.
