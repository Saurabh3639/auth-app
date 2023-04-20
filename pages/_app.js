import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "../components/ProtectedRoute";

const noAuthRequired = ["/", "/signin", "/signup"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
