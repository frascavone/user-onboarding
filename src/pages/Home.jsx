import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <Link to="/user-onboarding-contact-details">
        <button>User-onboarding</button>
      </Link>
    </div>
  );
}
