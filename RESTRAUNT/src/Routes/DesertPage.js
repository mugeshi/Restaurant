import './Menu.css';
import menuData from './MenuApi';

const DessertPage = () => {
  const dessertItems = menuData.filter(item => item.category === 'dessert');

  return (
    <div className="menu-container">
      <h2>Dessert</h2>
      <div className="menu-cards">
        {dessertItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className="menu-details">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-price">{item.price}</p>
              <p className="menu-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertPage;