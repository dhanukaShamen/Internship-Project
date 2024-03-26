document.addEventListener("DOMContentLoaded", function () {
  // Fetch menu data from JSON file
  fetch("menu.json")
    .then((response) => response.json())
    .then((menuData) => {
      console.log("Menu data:", menuData); // Log menuData for debugging

      // Compile Handlebars template
      const source = document.getElementById("nav-menu-template").innerHTML;
      const template = Handlebars.compile(source);

      // Render the template with menu data
      const navMenu = document.getElementById("nav-menu");
      if (navMenu) {
        navMenu.innerHTML = template({ menuItems: menuData });
      } else {
        console.error('Error: Element with id "nav-menu" not found');
      }
    })
    .catch((error) => console.error("Error fetching menu data:", error));
});

Handlebars.registerHelper('times', function(n, block) {
  var accum = '';
  for(var i = 0; i < n; ++i)
      accum += block.fn(i);
  return accum;
});
