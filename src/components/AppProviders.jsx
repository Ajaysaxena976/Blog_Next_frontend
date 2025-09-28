"use client"; // ⚡ important

import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";

export default function AppProviders({ children }) {
  return (
    <ReduxProvider store={store}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
        <Footer />
      </NextThemesProvider>
    </ReduxProvider>
  );
}
