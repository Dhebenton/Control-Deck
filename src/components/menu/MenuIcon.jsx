import { useUndoState } from "../../UndoContext"
import Home from './icons/home.svg'
import Megaphone from './icons/megaphone.svg'
import Gear from './icons/gear.svg'
import Atri from './icons/atri.svg'
import Page from './icons/paper.svg'
import Search from './icons/searchcircle.svg'
import ClipBoard from './icons/clip-board.svg'
import FolderOpen from './icons/folder-open.svg'
import Chart from './icons/chart.svg'
import Globe from './icons/globe.svg'
import Clock from './icons/clock.svg'
import Users from './icons/users.svg'
import Cursor from './icons/cursor.svg'
import Speed from './icons/speed.svg'
import Warning from './icons/warning.svg'
import CPUIcon from './icons/cpu.svg'
import Bolt from './icons/bolt.svg'
import Wrench from './icons/wrench.svg'
import Beaker from './icons/beaker.svg'
import PieChart from './icons/pie-chart.svg'
import Flame from './icons/flame.svg'
import Bell from './icons/bell.svg'
import Monitor from './icons/monitor.svg'
import Backups from './icons/squaresround.svg'
import Plane from './icons/plane.svg'
import Shield from './icons/shield.svg'
import ShieldHallow from './icons/shield-hallow.svg'
import Lock from './icons/lock.svg'
import Key from './icons/key.svg'
import LockOpen from './icons/lockopen.svg'
import Calendar from './icons/calendar.svg'
import Squares from './icons/squares.svg'
import Reload from './icons/reload.svg'
import Integrations from './icons/integrations.svg'
import CMSIcon from './icons/cms.svg'
import Image from './icons/image.svg'
import Cookies from './icons/cookies.svg'
import Form from './icons/form.svg'
import Card from './icons/card.svg'
import ChatBot from './icons/chat-bot.svg'
import IntegrationsManage from './icons/integrations-manage.svg'
import Flow from './icons/flow.svg'
import Pallet from './icons/pallet.svg'
import Cloud from './icons/cloud.svg'
import Pause from './icons/pause.svg'
import Code from './icons/codebrackets.svg'
import Speech from './icons/message.svg'
import Check from './icons/check.svg'
import Cart from './icons/cart.svg'
import Sparkles from './icons/sparkles.svg'
import Map from './icons/map.svg'
import FolderDown from './icons/folder-down.svg'
import Signal from './icons/signal.svg'
import NoSign from './icons/nosign.svg'
import CloudUp from './icons/cloudup.svg'
import Link from './icons/link.svg'
import Terminal from './icons/codeline.svg'
import SquareHallow from './icons/squarehallow.svg'
import Rocket from './icons/rocket.svg'
import Tag from './icons/tag.svg'
import Receipt from './icons/receipt.svg'
import User from './icons/user.svg'

function MenuIcon({}) {
    const { panelTab, navigationTab } = useUndoState();
    const currentTab = panelTab.present;
    const currentNav = navigationTab.present;

    const icons = [
        { id: 'Dashboard', context: 'Dashboard', icon: Home },
        { id: 'Marketing Funnel', context: 'Dashboard', icon: Megaphone },
        { id: 'Conversion Funnel', context: 'Dashboard', icon: Tag },
        { id: 'Dashboard Settings', context: 'Dashboard', icon: Gear },
        { id: 'Atri', context: 'Atri', icon: Atri },
        { id: 'Blog Generator', context: 'Atri', icon: Page },
        { id: 'Metadata Assistant', context: 'Atri', icon:  Search},
        { id: 'Insight Reports', context: 'Atri', icon: ClipBoard  },
        { id: 'Saved Replies', context: 'Atri', icon: FolderOpen},
        { id: 'Atri Settings', context: 'Atri', icon: Gear },
        { id: 'Analytics', context: 'Analytics', icon: Chart },
        { id: 'Traffic Source', context: 'Analytics', icon: Globe },
        { id: 'Pages', context: 'Analytics', icon: Page },
        { id: 'Real Time', context: 'Analytics', icon: Clock },
        { id: 'Audience', context: 'Analytics', icon: Users },
        { id: 'Behaviours', context: 'Analytics', icon: Cursor },
        { id: 'Conversions', context: 'Analytics', icon: Tag },
        { id: 'Analytics Settings', context: 'Analytics', icon: Gear },
        { id: 'Performance', context: 'Performance', icon: Bolt },
        { id: 'Speed Test', context: 'Performance', icon: Speed },
        { id: 'Core Web Vitals', context: 'Performance', icon: Chart },
        { id: 'Load Bottlenecks', context: 'Performance', icon: Warning },
        { id: 'Uptime Monitoring', context: 'Performance', icon: Clock },
        { id: 'Resource Usage', context: 'Performance', icon: CPUIcon },
        { id: 'Performance Settings', context: 'Performance', icon: Gear},
        { id: 'Split Testing', context: 'Split Testing', icon: Beaker },
        { id: 'Test Manager', context: 'Split Testing', icon: Wrench },
        { id: 'Traffic Control', context: 'Split Testing', icon: PieChart },
        { id: 'User Paths', context: 'Split Testing', icon: Cursor },
        { id: 'Heatmaps', context: 'Split Testing', icon: Flame },
        { id: 'Conversion Insights', context: 'Split Testing', icon: Tag },
        { id: 'Test Reports', context: 'Split Testing', icon: ClipBoard },
        { id: 'Split Testing Settings', context: 'Split Testing', icon: Gear },
        { id: 'Notifications', context: 'Notifications', icon: Bell },
        { id: 'System Alerts', context: 'Notifications', icon: Monitor },
        { id: 'User Events', context: 'Notifications', icon: Users },
        { id: 'Custom Events', context: 'Notifications', icon: Bolt },
        { id: 'Custom Triggers', context: 'Notifications', icon: Wrench },
        { id: 'Delivery Channels', context: 'Notifications', icon: Plane },
        { id: 'Notifications Settings', context: 'Notifications', icon: Gear },
        { id: 'Security', context: 'Security', icon: Shield },
        { id: 'Firewall Settings', context: 'Security', icon: ShieldHallow },
        { id: 'SSL/TLS', context: 'Security', icon: Lock },
        { id: 'DDoS Protection', context: 'Security', icon: Bolt },
        { id: 'Permissions & Access', context: 'Security', icon: Key },
        { id: 'Login Security', context: 'Security', icon: LockOpen },
        { id: 'Audit Logs', context: 'Security', icon: FolderOpen },
        { id: 'Threat Detection', context: 'Security', icon: Warning },
        { id: 'Security Settings', context: 'Security', icon: Gear },
        { id: 'Backups & Restore', context: 'Backups & Restore', icon: Backups },
        { id: 'Manual Backup', context: 'Backups & Restore', icon: Reload },
        { id: 'Backup Schedule', context: 'Backups & Restore', icon: Calendar },
        { id: 'Restore Points', context: 'Backups & Restore', icon: Squares },
        { id: 'Backup Logs', context: 'Backups & Restore', icon: FolderOpen },
        { id: 'Backup Settings', context: 'Backups & Restore', icon: Gear },
        { id: 'Integrations Hub', context: 'Integrations Hub', icon: Integrations },
        { id: 'CMS', context: 'Integrations Hub', icon: CMSIcon },
        { id: 'Booking System', context: 'Integrations Hub', icon: Calendar },
        { id: 'Image Optimiser', context: 'Integrations Hub', icon: Image },
        { id: 'Cookies Manager', context: 'Integrations Hub', icon: Cookies },
        { id: 'Smart Forms', context: 'Integrations Hub', icon: Form },
        { id: 'Payment Gateway ', context: 'Integrations Hub', icon: Card },
        { id: 'AI Chatbot', context: 'Integrations Hub', icon: ChatBot },
        { id: 'Auto Sitemap', context: 'Integrations Hub', icon: Flow },
        { id: 'Manage Integrations', context: 'Integrations Hub', icon: IntegrationsManage },
        { id: 'Integrations Settings', context: 'Integrations Hub', icon: Gear },
        { id: 'CMS', context: 'CMS', icon: CMSIcon },
        { id: 'Content Manager', context: 'CMS', icon: Backups },
        { id: 'Custom Fields', context: 'CMS', icon: Wrench },
        { id: 'Media Library', context: 'CMS', icon: Image },
        { id: 'Drafts & Scheduling', context: 'CMS', icon: Calendar },
        { id: 'Version History', context: 'CMS', icon: Squares },
        { id: 'CMS Settings', context: 'CMS', icon: Gear },
        { id: 'Booking System', context: 'Booking System', icon: Calendar },
        { id: 'Calendar Styling', context: 'Booking System', icon: Pallet },
        { id: 'Appointment Types', context: 'Booking System', icon: ClipBoard },
        { id: 'Availability & Slots', context: 'Booking System', icon: Clock },
        { id: 'Drafts & Scheduling', context: 'Booking System', icon: Page },
        { id: 'Automation & Flows', context: 'Booking System', icon: Bolt },
        { id: 'Booking Notifications', context: 'Booking System', icon: Bell },
        { id: 'Client Management', context: 'Booking System', icon: Users },
        { id: 'Payment Settings', context: 'Booking System', icon: Card },
        { id: 'Booking Settings', context: 'Booking System', icon: Gear },
        { id: 'Image Optimiser', context: 'Image Optimiser', icon: Image },
        { id: 'Image Library', context: 'Image Optimiser', icon: Backups },
        { id: 'Optimisation Logs', context: 'Image Optimiser', icon: FolderOpen },
        { id: 'CDN Delivery Toggle', context: 'Image Optimiser', icon: Cloud },
        { id: 'Lazy Load Settings', context: 'Image Optimiser', icon: Pause },
        { id: 'Compression Settings', context: 'Image Optimiser', icon: Wrench },
        { id: 'Optimisation Settings', context: 'Image Optimiser', icon: Gear },
        { id: 'Cookies Manager', context: 'Cookies Manager', icon: Cookies },
        { id: 'Cookie Categories', context: 'Cookies Manager', icon: Backups },
        { id: 'Geo-based Consent Rules', context: 'Cookies Manager', icon: Globe },
        { id: 'Third-party Scripts Control', context: 'Cookies Manager', icon: Code },
        { id: 'Consent Logs', context: 'Cookies Manager', icon: FolderOpen },
        { id: 'Consent Banner Editor', context: 'Cookies Manager', icon: Pallet },
        { id: 'Previous Edits', context: 'Cookies Manager', icon: Wrench },
        { id: 'Cookies Settings', context: 'Cookies Manager', icon: Gear },
        { id: 'Smart Forms', context: 'Smart Forms', icon: Form },
        { id: 'Submission Logs', context: 'Smart Forms', icon: FolderOpen },
        { id: 'Auto-Responses', context: 'Smart Forms', icon: Speech },
        { id: 'Form Manager', context: 'Smart Forms', icon: Backups },
        { id: 'Integrations', context: 'Smart Forms', icon: Bolt },
        { id: 'Form Builder', context: 'Smart Forms', icon: Pallet },
        { id: 'Validation Rules', context: 'Smart Forms', icon: Check },
        { id: 'Conditional Logic', context: 'Smart Forms', icon: Beaker },
        { id: 'Smart Forms Settings', context: 'Smart Forms', icon: Gear },
        { id: 'Payment Gateway', context: 'Payment Gateway', icon: Card },
        { id: 'Products & Pricing', context: 'Payment Gateway', icon: Tag },
        { id: 'Checkout Settings', context: 'Payment Gateway', icon: Cart },
        { id: 'Customer Management', context: 'Payment Gateway', icon: Users },
        { id: 'Security & Compliance', context: 'Payment Gateway', icon: ShieldHallow },
        { id: 'Payment Settings', context: 'Payment Gateway', icon: Gear },
        { id: 'AI Chatbot', context: 'AI Chatbot', icon: ChatBot },
        { id: 'Conversation Flow Builder', context: 'AI Chatbot', icon: Speech },
        { id: 'Training Phrases', context: 'AI Chatbot', icon: Sparkles },
        { id: 'Triggers & Responses', context: 'AI Chatbot', icon: Bolt },
        { id: 'Chat Panel Editor', context: 'AI Chatbot', icon: Pallet },
        { id: 'Channel Settings', context: 'AI Chatbot', icon: Wrench },
        { id: 'Chat Logs', context: 'AI Chatbot', icon: FolderOpen },
        { id: 'Chatbot Settings', context: 'AI Chatbot', icon: Gear },
        { id: 'Auto Sitemap', context: 'Auto Sitemap', icon: Flow },
        { id: 'Sitemap Preview', context: 'Auto Sitemap', icon: Map },
        { id: 'Manual Submission', context: 'Auto Sitemap', icon: FolderDown },
        { id: 'Search Engine Ping', context: 'Auto Sitemap', icon: Signal },
        { id: 'Auto-Update Settings', context: 'Auto Sitemap', icon: Clock },
        { id: 'URL Exclusions', context: 'Auto Sitemap', icon: NoSign },
        { id: 'Sitemap Settings', context: 'Auto Sitemap', icon: Gear },
        { id: 'Configurations', context: 'Configurations', icon: Globe },
        { id: 'Deployment Settings', context: 'Configurations', icon: CloudUp },
        { id: 'Deployment Settings', context: 'Configurations', icon: Code },
        { id: 'Domain Settings', context: 'Configurations', icon: Link },
        { id: 'Deployment Logs', context: 'Configurations', icon: FolderOpen },
        { id: 'Site Metadata', context: 'Configurations', icon: Search },
        { id: 'Custom Headers', context: 'Configurations', icon: Terminal },
        { id: 'Cache Control', context: 'Configurations', icon: CMSIcon },
        { id: 'Advanced', context: 'Configurations', icon: SquareHallow },
        { id: 'Configuration Settings', context: 'Configurations', icon: Gear },
        { id: 'Plans & Billing', context: 'Plans & Billing', icon: Rocket },
        { id: 'Website Plans', context: 'Plans & Billing', icon: Monitor },
        { id: 'Integrations', context: 'Plans & Billing', icon: Integrations },
        { id: 'Subscription Controls', context: 'Plans & Billing', icon: Wrench },
        { id: 'Billing History', context: 'Plans & Billing', icon: Receipt },
        { id: 'Payment Methods', context: 'Plans & Billing', icon: Card },
        { id: 'Users & Access', context: 'Users & Access', icon: User },
        { id: 'Team Members', context: 'Users & Access', icon: Users },
        { id: 'Roles & Permissions', context: 'Users & Access', icon: Key },
        { id: 'Access Requests', context: 'Users & Access', icon: Bell },
        { id: 'Login Security', context: 'Users & Access', icon: ShieldHallow },
        { id: 'User Logs', context: 'Users & Access', icon: FolderOpen },
        { id: 'Users Settings', context: 'Users & Access', icon: Gear },
        { id: 'Logs & Reports', context: 'Logs & Reports', icon: FolderOpen },
        { id: 'System Logs', context: 'Logs & Reports', icon: Monitor },
        { id: 'Deployment Logs', context: 'Logs & Reports', icon: Page },
        { id: 'Uptime Reports', context: 'Logs & Reports', icon: Cloud },
        { id: 'Audit Trail', context: 'Logs & Reports', icon: Search },
        { id: 'Security Logs', context: 'Logs & Reports', icon: ShieldHallow },
        { id: 'Custom Reports', context: 'Logs & Reports', icon: ClipBoard },
        { id: 'Reports Configuration', context: 'Logs & Reports', icon: Wrench },
        { id: 'Logs & Reports Settings', context: 'Logs & Reports', icon: Gear }
    ];

    
const matched = icons.find(icon => icon.id === currentTab);

return matched ? (
  <img src={matched.icon} className="menu-icon" alt={matched.id} />
) : null;
}

export default MenuIcon