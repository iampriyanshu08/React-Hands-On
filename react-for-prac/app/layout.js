import Header from "@/Components/Header";
import "./globals.css";
import MyContext from "@/Helper/Context";

export const metadata = {
  title: "Priyanshu React",
  description: "in this project we are learnign the concepts of react",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="">
        {/* <Header/> */}
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
