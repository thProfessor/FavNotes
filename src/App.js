import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import FavContextProvider from "./contexts/FavContext";

const myTheme = createTheme({
  palette: {
    secondary: {
      main: "#d35400",
    },
    // primary:{
    //   main:"",
    //   light:""
    // }
  },
  typography: {
    fontFamily: "Archivo Black",
  },
  // typography: {
  //   h4: {
  //     fontSize: "6rem",
  //   },
  // },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <FavContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Layout>
        </FavContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
