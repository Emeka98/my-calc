import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import SwitchTheme from "@/components/SwitchTheme";
export const metadata = {
  title: "Calculator app",
  description: "Created by Lucky Codes",
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`dark:bg-bg-navy text-bg-navy dark:text-bg-milk bg-bg-milk`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            // defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex mx-auto  align-middle flex-row justify-between w-[80%] 2xl:w-[37%] 2xl:mx-auto xl:w-[38%] xl:mx-auto md:w-[50%] md:mx-auto lg:w-[40%] lg:mx-auto">
              <h1 className="w-[25%] ml-2 font-semibold text-[32px] p-2">
                calc
              </h1>
              <h1 className=" w-[40%] flex justify-end font-semibold align-middle  text-center py-4 text-[20px]  mr-1">
                THEME
              </h1>
              <div className="w-[35%] justify-end flex flex-row ml-1 mr-0 ">
                <SwitchTheme />
              </div>
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
