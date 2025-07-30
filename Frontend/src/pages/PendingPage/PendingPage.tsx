import { Link } from 'react-router-dom';

const PendingPage = () => {
    return (
        <div>
        <p>Member isn't approved!</p>
        <Link to="/">Return Home</Link>
    </div>
    );
};

export default PendingPage;