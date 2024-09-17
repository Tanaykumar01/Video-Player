// const App = () => { 
//   return (
//     <div className="flex justify-between">
//       routes
//     </div>
//   )
// }
// export default App;
"use client";
import React, { useEffect, useState } from 'react';
import { checkUserLogin } from './api/auth'; // Import the function you wrote

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const currentUser = await checkUserLogin();

      setUser(currentUser);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>Welcome back, {user.email}!</div>
      ) : (
        <div>Please log in to access your account.</div>
      )}
    </div>
  );
};

export default App;
