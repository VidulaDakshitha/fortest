import React from 'react';




const Cardimg =React.lazy(() => import('./views/Menu/Card'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
 
  
  
  { path: '/', exact: true, name: 'Home'},

  {path:'/menu',name:'Cardimg',component:Cardimg},//added home
  
  
];

export default routes;
