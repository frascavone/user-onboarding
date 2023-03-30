import { LeftBlock } from './LeftBlock';
import { Outlet } from 'react-router-dom';

function UserOnboarding({ step, quote }) {
  return (
    <div className="user-onboarding">
      <LeftBlock step={step} quote={quote} />
      <Outlet />
    </div>
  );
}
export default UserOnboarding;
