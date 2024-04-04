import '../component/Menu.css';
import menuData from '../component/MenuApi';

const BreakfastPage = () => {
  // Filter menu items for breakfast category
  const breakfast = menuData.filter(item => item.category === 'breakfast');

  return (
    <div>
      <h2>Breakfast</h2>
      <div className="menu-cards">
        {breakfast.map(item => (
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

export default BreakfastPage;
