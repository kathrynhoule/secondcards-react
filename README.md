# React + Vite
This project utilizes Vite, as well as React and the React packages react-refresh and react-icons, along with router. React-refresh is necessary to view the images as they are currently set up, and three of the icons used on the app require react-icons. Router is used to switch between the pages of the site.

# General Information
This application is intended for an e-commerce website selling trading cards. 

Currently, the application has limited functionality. Each page of the site displays a header with navigation links to the different pages, as well as a main section. The only pages currently containing more things are the Shop and Cart pages.

The Shop page is currently set up to display some products, but the current number of products available is quite small, as the site is not connected to a database at this time, and the products shown are simply meant to show the working features of the search bar and filter components, as well as the add to cart function. Users can currently search for products using the search bar, or use the game, type, and price filters to filter products. In addition, users can add items to their cart using the "add to cart" buttons displayed on each product card.

The Cart page currently allows the user to review the items they have added to their cart and adjust the quantity of each item, either using the + or - buttons, or by manually inputting the desired quantity. The subtotal of all the products in the user's cart gets displayed at the button of the page, along with a Continue Shopping button and a Checkout button. The Continue Shopping button takes the user back to the Shop page, while the Checkout button is currently just for show.

# Updates
Since the last assignment, the focus has been updating and adding components to the site, to ensure that the site has some functionality. The search bar component added in the last assignment has now been fixed to function properly. Three types of filters for products have also been added, so that the products can now be filtered by which game they are from, by what type of product they are, or both, and by price.

Products are now mapped with product cards, so when they are displayed on the shop page, the product image sits in a container with additional info below each product image, and the ability to add products to the user's cart from the Shop page.

Products can also be added and removed from the user's cart from the Cart page, and the user can now view the subtotal of all their cart items.

# Future Updates
Moving forward, additional filters will be added to the site and the existing product data will be updated to work with them. The search bar on the Shop page may also be updated to only rerender when the user hits enter on their search, instead of updating the products shown as the user types. Ideally, filters will also be applied only when the user submits them via a button.

The Shop page will ideally be updated to display no products and a message if the user selects a combination of filters that do not match any products, as the Shop page right now returns all products in this case. The Shop page will also need to display a max number of products per page and allow the user to flip through different pages of products, once the site is connected to a database and more products are displayed on the site.

Product cards on the Shop page will link to individual product pages that will display additional info about each product.

Ideally, if the user's cart is empty, the Cart page will display a message saying the cart is empty, and not show a button to checkout. In the future, the Checkout form will continue to be updated to be a full form, and the order summary will display all the info for the items in the user's cart at checkout.

The Homepage currently displays nothing, but at the very least a component will be added to display some site info, and have a component for showing the lastest posts from the business' social media accounts. The About page will have minimal functions, and will mostly just be for displaying info about the company.

The site as a whole will also need to be updated so that it functions properly and looks good at multiple screen sizes, as most of the previous media queries for the site are now outdated after all the site changes that have been made.