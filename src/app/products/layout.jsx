import Sidebar from '@/components/Sidebar';
import React from 'react'



export const metadata = {
  title: "🥬 FreshBasket | Products",
  description: "Explore a wide range of fresh groceries, fruits, vegetables, dairy, bakery, and daily essentials at FreshBasket. Shop quality products at the best prices.",
};

const layout = ({children}) => {
  return (
    <div >
      {children}
    </div>
  )
}

export default layout
