//  - The objective of this project is to develop a web page utilizing the OOP RPG system designed in the previous night's homework. The webpage's functionality begins with prompting 
// the user to input their name and race. Upon creating a character, the page will display a Shop and Inventory section. The Shop section showcases all available items, allowing users 
// to add them to their Inventory. The Inventory section lists the contents of the inventory, including the price and quantity of each item. Each inventory item will feature buttons to 
// remove one item or all instances of that item. The Inventory will automatically update when items are added or removed. TypeScript will be employed, and Webpack configuration is required.

// // ## Step 1: Create A TypeScript Project

//     - Initialize a Node.js project by running npm init in your project's folder.
//     - Convert the project into a TypeScript project by installing TypeScript (npm install typescript) and creating a tsconfig.json file.
//     - Configure your tsconfig.json to align with the recommended options for this project.
//     - Set up Webpack by configuring your webpack.config.js and updating package.json accordingly.
//    - Install the uuid library and its corresponding types using npm (npm install uuid @types/uuid).

// ## Step 2: Create an HTML File


// ## Step 3: Modify our Classes
//     - Character Class Methods:

//     - static createRPGCharacter():
//         - Rename this method to static createRPGCharacter() to better match the RPG context.
//         - Modify this method to accept the character's name and race as parameters and return a new Character - instance.

class Character {
    name: string;
    race: string;

    constructor(name: string, race: string) {
        this.name = name;
        this.race = race;
      }
    
    static createRPGCharacter(): Character[] {
      const Charcater: Character[] = [
        new Character(name, race),
        
      ];
  
      return Character;
    }
  
    
  }
  
  class Character {
    
    addRemoveEventListeners(): void {
      const inventoryItems = document.querySelectorAll('.item');
  
      inventoryItems.forEach(itemDiv => {
        const removeOneButton = itemDiv.querySelector('.remove-one-button');
        const removeAllButton = itemDiv.querySelector('.remove-all-button');
  
        if (removeOneButton) {
          const itemName = itemDiv.querySelector('.item-name').textContent;
  
          
          removeOneButton.addEventListener('click', () => {
            const itemToRemove = this.inventory.find(item => item.name === itemName);
            if (itemToRemove) {
              this.removeQuantityFromInventory(itemToRemove, 1);
              
              this.updateInventory();
            }
          });
        }
  
        if (removeAllButton) {
          const itemName = itemDiv.querySelector('.item-name').textContent;
  
          
          removeAllButton.addEventListener('click', () => {
            const itemToRemove = this.inventory.find(item => item.name === itemName);
            if (itemToRemove) {
              this.removeFromInventory(itemToRemove);
            
              this.updateInventory();
            }
          });
        }
      });
    }
  

  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
  
    loginButton.addEventListener('click', () => {
      
      const character = Character.createRPGCharacter('Your RPG Character', 'Elf');
      console.log('Created RPG Character:', character);
  
      
      const inventoryItems = InventoryItem.createRPGItems();
  
      
      character.initializeInventory(inventoryItems);
  
    
      character.updateInventory();
    });
  });

//     - inventoryHTMLElement():
//         - Rename this method to inventoryHTMLElement() for consistency.
//         - Modify this method to generate and return an HTML element displaying the items in the character's inventory, including name, quantity, and any relevant details. Additionally, create buttons for removing one or all instances of each item from the inventory.

//     - addRemoveEventListeners():
//         - Modify this method to attach event listeners to the inventory's "Remove One" and "Remove All" buttons, akin to the original assignment. Utilize the RPG character's methods for removing items from the - inventory.

//     - Inventory Class Methods:

//     - showItems():
//         - Develop this method to iterate through the RPG character's inventory items and append each item's itemElement to the Shop div in the HTML.

//     - updateInventory():
//         - Create this method to update the character's inventory contents and display them in the Inventory div on the HTML page. If the inventory is empty, display a message to that effect. If the inventory contains items, employ the inventoryHTMLElement method and the addRemoveEventListeners function to display the inventory's contents.

//     - static createRPGItems():
//         - Rename this method to static createRPGItems() to align with the RPG inventory context.
//         - Modify this method to create and return an array of InventoryItem instances to populate the character's initial inventory.

//     - Driver Code

//     - Outside the classes, write code to run on page load, including:

//         - Attaching the createRPGCharacter method to the login/create character button.
//         - Initializing the Inventory with items using createRPGItems.
//         - Initializing the RPG character's inventory with items using createRPGItems.

//     - By adapting the original steps with RPG characters and inventories, you will establish a web page enabling users to engage with RPG characters, manage their inventories, and enjoy a customized iteration of the OOP Cart Shopping Page assignment.