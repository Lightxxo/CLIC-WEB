import { useInvite } from "@/contexts/InviteContext";


const NotificationBanner = () => {
    const {invitationCount} = useInvite();
    return (
        <div className='bg-amber-300 text-amber-700 p-2 ps-6 rounded-xl text-lg'>
            {invitationCount} new pool invitations.
        </div>
    );
};

export default NotificationBanner;