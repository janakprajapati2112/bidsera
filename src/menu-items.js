import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FormatUnderlinedOutlinedIcon from '@material-ui/icons/FormatUnderlinedOutlined';
import GamesOutlinedIcon from '@material-ui/icons/GamesOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import CallToActionOutlinedIcon from '@material-ui/icons/CallToActionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FormatColorTextOutlinedIcon from '@material-ui/icons/FormatColorTextOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TranslateIcon from '@material-ui/icons/Translate';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

const icons = {
    NavigationOutlinedIcon: NavigationOutlinedIcon,
    HomeOutlinedIcon: HomeOutlinedIcon,
    FormatUnderlinedOutlinedIcon: FormatUnderlinedOutlinedIcon,
    GamesOutlinedIcon: GamesOutlinedIcon,
    LoyaltyOutlinedIcon: LoyaltyOutlinedIcon,
    ForumOutlinedIcon: ForumOutlinedIcon,
    DescriptionOutlinedIcon: DescriptionOutlinedIcon,
    GridOnOutlinedIcon: GridOnOutlinedIcon,
    TableChartOutlinedIcon: TableChartOutlinedIcon,
    AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
    CallToActionOutlinedIcon: CallToActionOutlinedIcon,
    NotificationsNoneOutlinedIcon: NotificationsNoneOutlinedIcon,
    AppsOutlinedIcon: AppsOutlinedIcon,
    SmsOutlinedIcon: SmsOutlinedIcon,
    FilterVintageOutlinedIcon: FilterVintageOutlinedIcon,
    FormatColorTextOutlinedIcon: FormatColorTextOutlinedIcon,
    ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
    LayersOutlinedIcon: LayersOutlinedIcon,
    BlockOutlinedIcon: BlockOutlinedIcon,
    ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
    FiberManualRecordOutlinedIcon: FiberManualRecordOutlinedIcon,
    EditAttributesOutlinedIcon: EditAttributesOutlinedIcon,
    FaceOutlinedIcon: FaceOutlinedIcon,
    RadioButtonUncheckedOutlinedIcon: RadioButtonUncheckedOutlinedIcon,
    QuestionAnswerOutlinedIcon: QuestionAnswerOutlinedIcon,
    AccountCircleOutlinedIcon: AccountCircleOutlinedIcon,
    ShoppingCartOutlinedIcon: ShoppingCartOutlinedIcon,
    MailOutlineRoundedIcon: MailOutlineRoundedIcon,
    SpeakerNotesOutlinedIcon: SpeakerNotesOutlinedIcon,
    CardGiftcardOutlinedIcon: CardGiftcardOutlinedIcon,
    ErrorOutlineRoundedIcon: ErrorOutlineRoundedIcon,
    HourglassEmptyRoundedIcon: HourglassEmptyRoundedIcon,
    MonetizationOnOutlinedIcon: MonetizationOnOutlinedIcon,
    AssignmentIndOutlinedIcon: AssignmentIndOutlinedIcon,
    SecurityOutlinedIcon: SecurityOutlinedIcon,
    HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
    TranslateIcon: TranslateIcon,
    FormatListNumberedRtlIcon: FormatListNumberedRtlIcon,
};

export default {
    items: [
        {
            id: 'navigation',
            title: '',
            caption: '',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'ovarall',
                    title: 'Overall (cross-category)',
                    type: 'item',
                    icon: '',
                    url: '/app/overall',
                },
                {
                    id: 'gaming-overall',
                    title: 'Gaming - Overall',
                    type: 'item',
                    icon: '',
                    url: '/app/gaming-overall',
                },
                {
                    id: 'gaming-hyper-causal',
                    title: 'Gaming - Hyper Casual',
                    type: 'item',
                    icon: '',
                    url: '/app/gaming-hyper-causal',
                },
                {
                    id: 'gaming-midcore',
                    title: 'Gaming - Midcore',
                    type: 'item',
                    icon: '',
                    url: '/app/gaming-midcore',
                },
                {
                    id: 'gaming-hardcore',
                    title: 'Gaming - Hardcore',
                    type: 'item',
                    icon: '',
                    url: '/app/gaming-hardcore',
                },

                {
                    id: 'gaming-social-casino',
                    title: 'Gaming - Social Casino',
                    type: 'item',
                    icon: '',
                    url: '/app/gaming-casino',
                },

                {
                    id: 'shopping',
                    title: 'Shopping',
                    type: 'item',
                    icon: '',
                    url: '/app/shopping',
                },

                {
                    id: 'finnance',
                    title: 'Finance',
                    type: 'item',
                    icon: '',
                    url: '/app/finance',
                },

                {
                    id: 'social',
                    title: 'Social',
                    type: 'item',
                    icon: '',
                    url: '/app/social',
                },

                {
                    id: '',
                    title: 'Casino',
                    type: 'item',
                    icon: '',
                    url: '/app/casino',
                },

                {
                    id: 'entertainment',
                    title: 'Entertainment',
                    type: 'item',
                    icon: '',
                    url: '/app/entertainment',
                },

                {
                    id: 'photography',
                    title: 'Photography',
                    type: 'item',
                    icon: '',
                    url: '/app/photography',
                },

                {
                    id: 'lifestyle',
                    title: 'Lifestyle',
                    type: 'item',
                    icon: '',
                    url: '/app/lifestyle',
                },

                {
                    id: 'travel',
                    title: 'Travel',
                    type: 'item',
                    icon: '',
                    url: '/app/travel',
                },

                {
                    id: 'health-fitness',
                    title: 'Health & Fitness',
                    type: 'item',
                    icon: '',
                    url: '/app/health-and-fitness',
                },

                {
                    id: 'education',
                    title: 'Education',
                    type: 'item',
                    icon: '',
                    url: '/app/education',
                },
            ],
        },

      ]
};
