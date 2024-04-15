# React + Vite
This project utilizes Vite, as well as React and the React packages react-refresh and react-icons, along with router. React-refresh is necessary to view the images as they are currently set up, and three of the icons used on the app require react-icons. Router is used to switch between the pages of the site.

# General Information
This application is intended for an e-commerce website selling trading cards. 

Currently, the application has limited functionality. Each page of the site displays a header with navigation links to the different pages, as well as a main section. The only page currently containing more things is the Shop page.

The Shop page is currently set up to display some products, but the current number of products available is quite small, as the site is not connected to a database at this time, and the products shown are simply meant to show the working features of the search bar and filter components. Users can currently search for products using the search bar, or use the game and type filters to filter products.

# Updates
Since the last assignment, the focus has been updating and adding components to the site, to ensure that the site has some functionality. The search bar component added in the last assignment has now been fixed to function properly. Two types of filters for products have also been added, so that the products can now be filtered by which game they are part of and by what type of product they are, or both.

Products are now mapped with product cards, so when they are displayed on the shop page, the product image sits in a container with additional info below each product image.

# Future Updates
Moving forward, additional filters will be added to the site and the existing product data will be updated to work with them. The search bar on the shop page may also be updated to only rerender when the user hits enter on their search, instead of updating the products shown as the user types. 

Additional components will be added to create a functional cart that users can add and remove products from. This will also require at least adding an "add to cart" feature to each product card on the shop page.