import React from 'react'

const menuItems = [
  { name: 'Classic Matcha Latte', price: '₹180', desc: 'Smooth Japanese matcha with steamed milk.' },
  { name: 'Matcha Cheesecake', price: '₹220', desc: 'Creamy cheesecake with a matcha twist.' },
  { name: 'Iced Matcha Lemonade', price: '₹160', desc: 'Refreshing lemonade with a matcha kick.' },
  { name: 'Matcha Tiramisu', price: '₹250', desc: 'Classic tiramisu infused with matcha.' },
]

const MenuSection = () => (
  <section id="menu" className="py-20 bg-blue-50 text-primary flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
      {menuItems.map((item) => (
        <div key={item.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
          <p className="text-blue-800 mb-2">{item.price}</p>
          <p className="text-blue-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default MenuSection 