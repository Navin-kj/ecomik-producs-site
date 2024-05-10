export const getCurrentRouteName = (pathname: string): string => {
  const routeName = pathname.split("/").pop() || "home";
  const formattedName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
  return formattedName;
};
