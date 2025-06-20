
import { Navigate } from 'react-router-dom';

// Redirection vers la page d'accueil
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
