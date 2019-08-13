
//import console = require("console");

export default (state = null, action) => {
switch (action.type) {
   case 'select_library':
     return action.payload;

   default:
     return state;
 }
};
