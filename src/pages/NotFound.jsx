import { NavLink } from 'react-router-dom';


function NotFound() {
    return (
      <div className="errorPage">
      <h1 className="err404">404</h1>
      <div className="errorMessageContent">
      <p className="errorMessage">Oups! La page que</p>
      <p className="errorMessage"> vous demandez n'existe pas.</p>
      </div>
      <NavLink to="/" className="homeclic">Retournez vers la page d'accueil</NavLink>
      </div>
    );
  }
  
  export default NotFound;