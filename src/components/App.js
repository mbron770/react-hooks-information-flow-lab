import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick = {onDarkModeClick} isDarkMode = {isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;










// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";
// import Header1 from "./Header1";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <Header1 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
