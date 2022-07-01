import Item from './Item';
import { useState } from 'react';

export default function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
