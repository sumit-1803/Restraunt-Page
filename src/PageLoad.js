// Responsible for making the home page 
// appending the image , appending the home line 
import createRestrauranthomePage from './restraurant';
import createTabs from './tabs';
function initialLoad(){
    createTabs();
    createRestrauranthomePage();
}

export default initialLoad;