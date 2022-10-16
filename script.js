const coffeeFacts = [
    'The drink dates back to 800 A.D.',
    'Coffee beans are technically seeds.',
    'There are two main types: Arabica and Robusta.',
    'Brazil grows the most coffee in the world.',
    'Only two U.S. states produce coffee. California and Hawaii.',
    'Espresso means "pressed out" in Italian.',
    'The most expensive coffee can cost more than $600 a pound.',
    'You can overdose on coffee, but that would take 30 cups in a short period of time.',
    'Finland is home to the biggest coffee lovers. The average adult will go through 27.5 lbs of coffee in a year.',
    'Coffee drinkers tend to live longer.',
    'The largest cup of coffee ever filled a 9-foot tall cup. The record was set in 2012.',
    'The Boston Tea Party helped popularize coffee in America.',
    'The word "coffee" comes from the Arabic word for "wine."',
    'Starbucks opens an average of two stores per day. Crazy, right?'
];

function newFact(){
    const randomFact = Math.floor(Math.random() * (coffeeFacts.length));
    document.getElementsById('factDisplay').innerHTML = coffeeFacts[randomFact];
};

newFact();