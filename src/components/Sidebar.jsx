import React, { startTransition, useCallback, useEffect, useLayoutEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { cn } from "../lib/utils";
import { Eye, HandCoins, Home, Link2, Link2Icon, LinkIcon, UserPlus } from "lucide-react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import useQueryParam from "../hooks/useQueryParams";
import useLoacationArray from "../hooks/useLoacationArray";
export default function Sidebar() {
  const { tabs, setTabs, sidebar, setSidebar } = useGlobalContext();
  const isLargeScreen = useMediaQuery("(min-width:1023px)");
  const locArray = useLoacationArray()
  useEffect(() => {
    if (!isLargeScreen) setSidebar(false);
  }, [isLargeScreen]);

  const selectTab = useCallback((nextTab) => {
    startTransition(() => {
      setTabs(nextTab);
    });
  });

  useLayoutEffect(() => {
    const linkMap = {
      "home": "Home",
      "add-employee": "Add Employee",
      "break-up": "Payroll",
      "view-employee": "View"
    }
    setTabs(linkMap[locArray[1]])
  }, [locArray]);


  return (
    <>
      <div
        className={cn(
          "fixed inset-0 backdrop-blur-sm z-10 duration-200",
          sidebar
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebar(false)}
      ></div>
      <div
        className={cn(
          "h-[calc(100vh-80px)] fixed flex mt-20 bg-white z-20 duration-100 lg:-translate-x-full",
          sidebar && "lg:translate-x-0"
        )}
      >
        <div className="fixed-panel w-16  bg-theme-1 text-white">
          <TabsList>
            <Link
              to="/dashboard"
              onClick={() => {
                setSidebar(false);
              }}
            >
              <TabsTrigger
                className="p-4 w-full"
                active="bg-white text-zinc-800 "
                tab={tabs}
                tabIndex={"Home"}
                selectTab={selectTab}
                icon={<Home />}
              ></TabsTrigger>
            </Link>
            <Link
              to="/dashboard/add-employee"
              onClick={() => {
                setSidebar(false);
              }}
            >
              <TabsTrigger
                className="p-4 w-full"
                active="bg-white text-zinc-800 "
                tab={tabs}
                tabIndex={"Add Employee"}
                selectTab={selectTab}
                icon={<UserPlus />}
              ></TabsTrigger>
            </Link>
            <Link
              to="/dashboard/break-up"
              onClick={() => {
                setSidebar(false);
              }}
            >
              <TabsTrigger
                className="p-4 w-full"
                active="bg-white text-zinc-800 "
                tab={tabs}
                tabIndex={"Payroll"}
                selectTab={selectTab}
                icon={<HandCoins />}
              ></TabsTrigger>
            </Link>
            <Link
              to="/dashboard/view-employee"
              onClick={() => {
                setSidebar(false);
              }}
            >
              <TabsTrigger
                className="p-4 w-full"
                active="bg-white text-zinc-800 "
                tab={tabs}
                tabIndex={"View"}
                selectTab={selectTab}
                icon={<Eye />}
              ></TabsTrigger>
            </Link>
          </TabsList>
        </div>
        <div className="collapseble-panel w-48 border-r">
          <TabsContent tab={tabs} tabIndex={"Home"}>
            <div className="text-lg p-4 pb-0">Hello, There 😄</div>
            <div className="p-4 pt-2 text-zinc-500">
              You can navigate between modules by setting different icons on
              left
            </div>
          </TabsContent>
          <TabsContent tab={tabs} tabIndex={"Add Employee"}>
            <div className="p-4 pt-2 text-zinc-500">
              Please Fill the details to Add employee.
            </div>
          </TabsContent>
          <TabsContent tab={tabs} tabIndex={"Payroll"}>
            <NavLink to={'/dashboard/pay-slip'} className='nav-link text-theme-text border-2 border-theme-text border-opacity-10 bg-theme-text bg-opacity-5 rounded m-2 truncate px-2 py-px flex items-center  gap-1' activeClassName={""}  > <LinkIcon className="h-4" /> Pay slip </NavLink>
          </TabsContent>
          <TabsContent tab={tabs} tabIndex={"View"}>
            <NavLink to={'/dashboard/employee-salary'} className='nav-link text-theme-text border-2 border-theme-text border-opacity-10 bg-theme-text bg-opacity-5 rounded m-2 truncate px-2 py-px flex items-center  gap-1' activeClassName={""}  > <LinkIcon className="h-4" /> Employee Hikes </NavLink>
          </TabsContent>
        </div>
      </div>
    </>
  );
}

function TabsList(props) {
  const { className, children } = props;
  return (
    <nav className={cn("", className)} {...props}>
      <div className="absolute"></div>
      {children}
    </nav>
  );
}

function TabsTrigger(props) {
  const { tab, selectTab, tabIndex, icon, active } = props;
  return (
    <button
      onClick={() => selectTab(tabIndex)}
      className={cn(
        "p-2 flex items-center justify-center duration-200",
        props.className,
        tab === tabIndex && (active || "border-b-blue-500")
      )}
    >
      {icon && icon}
      {props.children}
    </button>
  );
}
function TabsContent(props) {
  const { tab, tabIndex, className } = props;
  return (
    tab === tabIndex && (
      <div className={cn("container", className)} {...props}>
        {props.children}
      </div>
    )
  );
}
