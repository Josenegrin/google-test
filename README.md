# Google Clone

This project is a simple clone of Google's search interface built using **Next.js**. It includes a homepage and a results page to simulate a search experience. The project demonstrates frontend development skills, including the use of React, CSS Modules, Zustand for state management, and other modern tools.

---

## 🖥️ Project URL

- **Repository:** [https://github.com/Josenegrin/google-test](https://github.com/Josenegrin/google-test)  
- **Live Demo:** [https://google-test-henna.vercel.app/](https://google-test-henna.vercel.app/)

---

## 🚀 Features

- **Search Input**: Includes a search bar on both the homepage and results page. The results page retrieves mock data filtered based on the search query.
- **Results Display**: Simulates displaying search results with a sidebar for detailed information when an item is clicked.
- **Responsive Design**: Adapts to different screen sizes. On small screens, the detail panel is replaced by a modal.
- **Skeleton Loading**: Includes skeleton loaders for better user experience during data loading.

---

## 📦 Installation and Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Josenegrin/google-test.git
   cd google-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the project in your browser:
   ```text
   http://localhost:3000
   ```

---

## 🔧 Technologies Used

- **Next.js** (with React 19)
- **Zustand** for state management
- **CSS Modules** for scoped styling
- **TypeScript** for type safety
- **Vercel** for deployment
- **Vitest** and **Testing Library** for unit tests (partial implementation)

---

## ✨ What I Would Do Differently If I Had More Time

1. **Internationalization**: Add locales for all text instead of hardcoding them. This would make the app adaptable to different languages.
2. **Authentication**: Implement authentication using **NextAuth** (e.g., with Google or GitHub). This would allow displaying the user's name and email when clicking on the avatar icon.
3. **Functional App Icon**: Make the "apps" icon functional by showing at least a small menu, even with placeholder text.
4. **Skeleton for Images**: Show a skeleton loader for the detail card image while it loads, to avoid empty spaces and improve user feedback.
5. **SWR for Data Management**: If data were loaded from an API, I would use **SWR** for efficient fetching, revalidation, and loading management.
6. **Modal Enhancements**:
   - Close the modal when pressing the `Esc` key.
   - Automatically trigger the search request on page reload if a search query exists in the URL.
7. **Comprehensive Testing**: Add unit tests for every file, including custom hooks, to ensure reliability.
8. **Server-Side Rendering (SSR)**: If the data were fetched directly from a database, I would use SSR on the results route to fetch the data server-side and display it immediately.
9. **Vitest Issue Resolution**: Address an issue where rendering components like `render(<Component />)` fails in tests. This seems related to **React 19** compatibility with Next.js. Unfortunately, this issue prevented full implementation of tests in the build.

---

## 📝 Note

I added a few tests in the `feat/tests` branch to demonstrate basic functionality.
