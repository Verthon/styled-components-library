import { ThemeProvider } from "../ThemeProvider/ThemeProvider"
import type { LibraryProviderProps } from "./LibraryProvider.types"

const LibraryProvider = ({ children }: LibraryProviderProps) => {
  return <ThemeProvider>{ children }</ThemeProvider>
}

export default LibraryProvider;