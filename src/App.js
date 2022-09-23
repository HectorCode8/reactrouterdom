import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import { LogOutPage } from "./LogOutPage.js";
import { AuthProvider, AuthRoute } from "./auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route 
              path="/login" 
              element={<LoginPage />} />

            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogOutPage />
                </AuthRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
