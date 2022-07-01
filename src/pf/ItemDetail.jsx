import ItemCount from './ItemCount';
import { myContext } from './HOCContext';
import { useContext } from 'react';

export default function ItemDetail({ item }) {
  function onAdd(count) {
    alert('Quiero agregar ' + count + ' de ' + item.name);
  }
  return (
    <>
      <div style={{ border: '3px solid green', padding: '50px' }}>
        ITEMDETAIL
        {JSON.stringify(item)}
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </>
  );
}
