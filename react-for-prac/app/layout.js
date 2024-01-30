import Header from "@/Components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className="">
      <Header/>
        {children}</body>
    </html>
  );
}
