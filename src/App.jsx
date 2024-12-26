import ReactGA from "react-ga4";
import { lazy, Suspense, useEffect, useRef } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "@contexts/sidebarContext";
import { ThemeProvider } from "styled-components";
import { useTheme } from "@contexts/themeContext";
import { useWindowSize } from "react-use";
import ScrollToTop from "@components/ScrollToTop";
import Loader from "@components/Loader";
import Sidebar from "@layout/Sidebar";
import Copyright from "@components/Copyright";
import AppBar from "@layout/AppBar";
import { getCookie } from "@utils/cookie";
import {jwtDecode} from "jwt-decode";

// Styles and fonts
import "@styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import ThemeStyles from "@styles/theme";
import "@fonts/icomoon/icomoon.woff";

// Pages
const Login = lazy(() => import("@pages/Login"));
const SalesAnalytics = lazy(() => import("@pages/SalesAnalytics"));
const SellersList = lazy(() => import("@pages/SellersList"));
const SellersTable = lazy(() => import("@pages/SellersTable"));
const SellersGrid = lazy(() => import("@pages/SellersGrid"));
const SellerProfile = lazy(() => import("@pages/SellerProfile"));
const Categories = lazy(() => import("@pages/Categories"));
const RevenueByPeriod = lazy(() => import("@pages/RevenueByPeriod"));
const TopProducts = lazy(() => import("@pages/TopProducts"));
const ProductsGrid = lazy(() => import("@pages/ProductsGrid"));
const ProductsManagement = lazy(() => import("@pages/ProductsManagement"));
const ProductEditor = lazy(() => import("@pages/EditProduct"));
const Banners = lazy(() => import("@pages/Banners"));
const Orders = lazy(() => import("@pages/Orders"));
const Statistics = lazy(() => import("@pages/Statistics"));
const Reviews = lazy(() => import("@pages/Reviews"));
const Customers = lazy(() => import("@pages/Customers"));
const Transactions = lazy(() => import("@pages/Transactions"));
const GeneralSettings = lazy(() => import("@pages/GeneralSettings"));
const ConnectedApps = lazy(() => import("@pages/ConnectedApps"));
const PageNotFound = lazy(() => import("@pages/PageNotFound"));

const App = () => {
  const { width } = useWindowSize();
  const appRef = useRef(null);
  const { theme } = useTheme();
  const location = useLocation();
  const withSidebar =
    location.pathname !== "/login" && location.pathname !== "/404";

  const gaKey = import.meta.env.VITE_GA;
  if (gaKey) ReactGA.initialize(gaKey);

  useEffect(() => {
    appRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  const isAuthenticated = () => {
    const token = getCookie("user_login");
    if (token) {
      try {
        const dataInforUser = jwtDecode(JSON.parse(token));
        return dataInforUser?.roleNames?.includes("admin");
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
    return false;
  };

  return (
    <SidebarProvider>
      <ThemeProvider theme={{ theme }}>
        <ThemeStyles />
        <ToastContainer
          theme={theme}
          autoClose={2000}
          style={{ padding: "20px" }}
        />
        {width < 1280 && withSidebar && <AppBar />}
        <div className={`app ${!withSidebar ? "fluid" : ""}`} ref={appRef}>
          <ScrollToTop />
          {withSidebar && <Sidebar />}
          <div className="app_content">
            {width >= 1280 && withSidebar && <AppBar />}
            <Suspense fallback={<Loader />}>
              <div className="main">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      isAuthenticated() ? (
                        <SalesAnalytics />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="sellers-list"
                    element={
                      isAuthenticated() ? (
                        <SellersList />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="sellers-table"
                    element={
                      isAuthenticated() ? (
                        <SellersTable />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="sellers-grid"
                    element={
                      isAuthenticated() ? (
                        <SellersGrid />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="products-management"
                    element={
                      isAuthenticated() ? (
                        <ProductsManagement />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="categories"
                    element={
                      isAuthenticated() ? (
                        <Categories />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="seller-profile/:id"
                    element={
                      isAuthenticated() ? (
                        <SellerProfile />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="revenue-by-period"
                    element={
                      isAuthenticated() ? (
                        <RevenueByPeriod />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="top-products"
                    element={
                      isAuthenticated() ? (
                        <TopProducts />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="products-grid"
                    element={
                      isAuthenticated() ? (
                        <ProductsGrid />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="product-editor"
                    element={
                      isAuthenticated() ? (
                        <ProductEditor />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="banners"
                    element={
                      isAuthenticated() ? (
                        <Banners />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="orders"
                    element={
                      isAuthenticated() ? (
                        <Orders />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="reviews/:slug"
                    element={
                      isAuthenticated() ? (
                        <Reviews />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />

                  <Route
                    path="reviews"
                    element={
                      isAuthenticated() ? (
                        <Reviews />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="customers"
                    element={
                      isAuthenticated() ? (
                        <Customers />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="transactions"
                    element={
                      isAuthenticated() ? (
                        <Transactions />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="general-settings"
                    element={
                      isAuthenticated() ? (
                        <GeneralSettings />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="connected-apps"
                    element={
                      isAuthenticated() ? (
                        <ConnectedApps />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route path="*" element={<Navigate to="/404" />} />
                  <Route path="/404" element={<PageNotFound />} />
                </Routes>
              </div>
              {withSidebar && <Copyright />}
            </Suspense>
          </div>
        </div>
      </ThemeProvider>
    </SidebarProvider>
  );
};

export default App;
