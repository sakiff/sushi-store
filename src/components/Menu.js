import React from 'react'
import {GiFishbone} from 'react-icons/gi'

const Menu = () => {
    const rolls =  [
        {
            key: 1,
            name: 'Alaska Roll*',
            price: '$7.95',
            desc: 'Fresh Salmon, Avocado, Crab Meat'
        },
        {
            key: 2,
            name: 'Amazing Roll',
            price: '$11.95',
            desc: 'Shimp Tempura, Cream Cheese; Scallop, & Avacodo.'
        },
        {
            key: 3,
            name: 'Atlanta Roll',
            price: '$8.95',
            desc: 'Crab Meat, Avocado; Cooked Shrimp, Spicy Mayo'
        },
        {
            key: 4,
            name: 'California Roll ',
            price: '$5.95',
            desc: 'Cucumber, Avocado, Crab Meat, Masago'
        },
        {
            key: 5,
            name: 'Caterpillar Roll',
            price: ' $9.95',
            desc: 'Cream Cheese, Eel, Avocado, Eel, Creamy Sauce on top'
        },
        {
            key: 6,
            name: 'Dynamite Roll',
            price: '$8.95',
            desc: 'Spicy White Tuna, cream cheese, and Mango Sauce'
        },
        {
            key: 7,
            name: 'Flame Roll*',
            price: '11.95',
            desc: 'Shrimp Tempura, Crab Meat, Jalapenos, Spicy Mayo'
        },
        {
            key: 8,
            name: 'Mikata Roll*',
            price: '11.95',
            desc: 'Salmon, Avocado inside; Tuna, Spicy Mayo'
        },
        {
            key: 9,
            name: 'Rainbow Roll',
            price: '$9.95',
            desc: 'Crab Meat, Avocado, Tuna, Yellow Tail, Salmon'
        },
        {
            key: 10,
            name: 'Samurai Roll',
            price: '$12.95',
            desc: 'Tuna, Yellowtail, Salmon, Masago, Sauce on top'
        },
        {
            key: 11,
            name: 'Winter Roll',
            price: '$11.95',
            desc: 'Spicy Salmon, Avocado, Salmon, Spicy Mayo on top'
        },
        {
            key: 12,
            name: 'Volcano Roll',
            price: '$11.95',
            desc: 'California Roll inside; Crab, Fish Roe, Special Sauce'
        },
        {
            key: 13,
            name: 'Tiger Eye Roll',
            price: '$11.95',
            desc: 'Spicy Salmon, Cucumber, Salmon, Spicy Mayo on top'
        },
        {
            key: 14,
            name: 'Yellow Tail Roll',
            price: '$11.95',
            desc: 'Spicy Tuna, Crab, Salmon, Spicy Mayo on top'
        },
        {
            key: 15,
            name: 'Naruto Roll*',
            price: '11.95',
            desc: 'Salmon, Avocado inside; Tuna, Spicy Mayo'
        },
        {
            key: 16,
            name: 'Kyuubi Roll',
            price: '$9.95',
            desc: 'Spicy Salmon, Crunch, Tuna, Yellow Tail, Salmon'
        }

    ] 
    
    
    return (
        
        <div>
            <section className="menu container" name="menu" id="menu">
                <div className="menu-title">
                    <GiFishbone className="fishBone"/>
                    <h1>Crunchy Tuna Roll</h1>
                    <GiFishbone className="fishBone"/>
                </div>
                <div className="appetizers">
                    <h3 className="menu-sub-title">Appetizers</h3>
                    <ul>
                        <li>
                        <strong>Miso Soup</strong>...........................................................................$1.50 
                        </li>
                        <li>
                        <strong>Cucumber Salad</strong>...........................................................$4.25 
                        </li>
                        <li>
                        <strong>Edamame</strong>...........................................................................$4.25
                        </li>
                        <li>
                        <strong>BBQ Eel (Unagi)</strong>.........................................................$4.25
                        </li>
                        <li>
                        <strong>Octopus (Tako)</strong>.............................................................$4.50
                        </li>
                        <li>
                        <strong>Red Snapper (Tai)*</strong>...................................................$3.25
                        </li>
                        <li>
                        <strong>Shrimp (Ebi)</strong>....................................................................$3.95
                        </li>
                        <li>
                        <strong>Smoked Salmon</strong>............................................................$4.25
                        </li>                     
                    </ul>
            </div>
            <hr></hr>
                    <div className="sushi">
                        <h3 className="menu-sub-title">Sushi Rolls</h3>
                        <div className="sushiRolls">
                            <ul>
                                <div>
                                    {rolls.map(roll => 
                                    <li key={roll.key}> 
                                    <strong>{roll.name} </strong> {roll.price} 
                                    <br></br>
                                    <p>{roll.desc}</p>
                                  
                                    </li>)}
                                </div>           
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="noodles">
                        <h3 className="menu-sub-title">Noodles</h3>
                        <div className="noodlesSection">
                            <ul>
                                <div>   
                                    <li>
                                        <strong>Beef Udon</strong>.................................................................................$6.95 
                                    </li>
                                    <li>
                                        <strong>Chicken Udon</strong>.......................................................................$7.95
                                    </li>
                                    <li>
                                        <strong>Shrimp Tempura Udon</strong>................................................$9.95
                                    </li>
                                </div>                
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="sushi">
                        <h3 className="menu-sub-title">Drinks</h3>
                        <div className="drinkSection row center">
                            
                                <div>
                                    <ul>
                                        <li>
                                            <strong>Coke</strong>................................................................$2.49 
                                        </li>
                                        <li>
                                            <strong>Ginger-Ale</strong>.................................................$2.49
                                        </li>
                                        <li>
                                            <strong>Sprite</strong>...............................................................$2.49
                                        </li>
                                        <li>
                                            <strong>Club Soda</strong>...................................................$2.49
                                        </li>
                                        <li>
                                            <strong>Fanta</strong>.............................................................$2.49
                                        </li>
                                    </ul>
                                    
                                </div> 
                                <div>
                                    <ul>
                                        <li>
                                            <strong>Poland Spring</strong>...................................$1.95
                                        </li>
                                        <li>
                                            <strong>Iced Tea</strong>.................................................$1.95
                                        </li>
                                        <li>
                                            <strong>Green Tea</strong>............................................$1.95
                                        </li>
                                        <li>
                                            <strong>Hot Sake</strong>............................................$10.95
                                        </li>
                                        <li>
                                            <strong>Cold Sake</strong>..........................................$10.95
                                        </li>
                                    </ul>
                                    
                                </div>                 
                            
                        </div>
                    </div>
                    
                    
                    
                <p className="notice">*NOTICE: Consuming raw or undercooked meat, poultry, seafood, shellfish, or eggs may increase your risk of food borne illness.*</p>
            </section>
        </div>
    )

}    

export default Menu
