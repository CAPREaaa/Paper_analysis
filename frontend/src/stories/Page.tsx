import React, { FC, useState } from 'react';

import { Header } from './Header';
import './page.css';
import './styles.css';

// 导入 Material-UI 组件
//import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './App.css';

// 网页组件
export const Page: React.FC = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // 处理登录逻辑
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // 处理登出逻辑
    setLoggedIn(false);
  };

  return (
    <Box>
      {/* Header */}
      <AppBar position="static" className="AppBar">
        <Toolbar>
          <Typography variant="h6" component="div">
            Your Website
          </Typography>
          {/* 根据登录状态显示不同的按钮 */}
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout} style={{ backgroundColor: '#ff0000', marginLeft: 'auto', }}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogin} style={{ backgroundColor: '#00ff00', marginLeft: 'auto',}}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        {/* Search Bar */}
        <Box className="search-box">
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            // 添加搜索逻辑
          />
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Search
          </Button>
        </Box>

        {/* Main Content Goes Here */}
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome to the analysis query page
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is the main content of your query page.
        </Typography>
      </Container>

      {/* Footer */}
      <Box className="footer" mt={8} p={2}>
        <Container>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Website. All rights reserved.
          </Typography>
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default Page;





// export const Page: React.FC = () => {
//   const [user, setUser] = React.useState<User>();
//
//   return (
//     <article>
//       <Header
//         user={user}
//         onLogin={() => setUser({ name: 'Jane Doe' })}
//         onLogout={() => setUser(undefined)}
//         onCreateAccount={() => setUser({ name: 'Jane Doe' })}
//       />
//
//       <section className="storybook-page">
//         <h2>Analysis System</h2>
//         <p>
//           We recommend building UIs with a{' '}
//           <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
//             <strong>component-driven</strong>
//           </a>{' '}
//           process starting with atomic components and ending with pages.
//         </p>
//         <p>
//           Render pages with mock data. This makes it easy to build and review page states without
//           needing to navigate to them in your app. Here are some handy patterns for managing page
//           data in Storybook:
//         </p>
//         <ul>
//           <li>
//             Use a higher-level connected component. Storybook helps you compose such data from the
//             "args" of child component stories
//           </li>
//           <li>
//             Assemble data in the page component from your services. You can mock these services out
//             using Storybook.
//           </li>
//         </ul>
//         <p>
//           Get a guided tutorial on component-driven development at{' '}
//           <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
//             Storybook tutorials
//           </a>
//           . Read more in the{' '}
//           <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
//             docs
//           </a>
//           .
//         </p>
//         <div className="tip-wrapper">
//           <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
//           <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//             <g fill="none" fillRule="evenodd">
//               <path
//                 d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
//                 id="a"
//                 fill="#999"
//               />
//             </g>
//           </svg>
//           Viewports addon in the toolbar
//         </div>
//         <div className="search-container">
//       <input type="text" placeholder="Search..." className="search-input" />
//       <button className="search-button">Search</button>
//     </div>
//       </section>
//     </article>
//   );
// };
