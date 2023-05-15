import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHands, faToolbox } from '@fortawesome/free-solid-svg-icons';

const usersIcon = <FontAwesomeIcon icon={faUsers} />
const handsIcon = <FontAwesomeIcon icon={faHands} />
const toolBoxIcon = <FontAwesomeIcon icon={faToolbox} />

export const gettingStartedArticles = [
    {
        title: "Community",
        icon: usersIcon,
        description: 'Speak with our specialized advisors on planning tips and resources for early childhood development.Give your child the best opportunities.'
    },
    {
        title: "Get Involved",
        icon: handsIcon,
        description: 'Get exclusive access to benefits only offered to E-Parents Online members. Sign up for an account today to gain access.'
    },
    {
        title: "Support",
        icon: toolBoxIcon,
        description: "By joining us at E-Parents Online, you'll gain the abilities to use special tools to monitor your child's progression"
    },

]