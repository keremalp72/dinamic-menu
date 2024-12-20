function listed() {

  console.log("a")
}







async function getMenus() {
const menuItems = await fetch("assets/data.json").then((r) => r.json());
console.log(menuItems);
for (const item of menuItems) {
  menu.innerHTML += `
  <li>${item.label} - ${item.children}</li>`;
  document.querySelector("li").addEventListener("click", listed);

}
}
getMenus();

