import React, {useState} from 'react'
import Gate from './Gate';

const Home = () => {
const [showComponent, setShowComponent] = useState(true);

  const handleDeleteClick = () => {
    setShowComponent(false);
  };

  return (
    <div>
    {showComponent && <Gate onDelete={handleDeleteClick} />}
    <div>Other content in the app...</div>
  </div>

  )
}

export default Home