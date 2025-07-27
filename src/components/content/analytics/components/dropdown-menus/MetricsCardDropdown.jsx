import { useState, useEffect, useRef } from 'react';
import Chevron from '../../../../assets/icons/chevron.svg';
import AvgSessionIcon from '../../assets/metric-card-icons/session-duration.svg';
import UniqueVisitorsIcon from '../../assets/metric-card-icons/unique-visitor.svg';
import ConversionsIcon from '../../assets/metric-card-icons/tag.svg';
import CTRIcon from '../../assets/metric-card-icons/ctr.svg';
import UsersIcon from '../../assets/metric-card-icons/users.svg';
import BounceRateIcon from '../../assets/metric-card-icons/bounce-rate.svg';
import PagesIcon from '../../assets/metric-card-icons/pages.svg';
import ScrollDepthIcon from '../../assets/metric-card-icons/scroll-depth.svg';

const icons = {
    "Click Through Rate": CTRIcon,
    "Total Visitors": UsersIcon,
    "Bounce Rate": BounceRateIcon,
    "Scroll Depth": ScrollDepthIcon,
    "Conversion Rate": ConversionsIcon,
    "Avg Session Duration": AvgSessionIcon,
    "Unique Visitors": UniqueVisitorsIcon,
    "Avg Pages / Session": PagesIcon
};

function MetricsCardDropdown({ selected, onSelect, availableMetrics }) {
    const [open, setOpen] = useState(false);
    const [animating, setAnimating] = useState(true);
    const [toggled, setToggled] = useState(false);
    const dropdownRef = useRef(null);

    const options = Object.keys(icons).filter(opt => !availableMetrics.includes(opt) || opt === selected);

    function toggleDropdown() {
        if (open) {
            setToggled(false);
            setAnimating(true);
            setTimeout(() => setOpen(false), 250);
        } else {
            setToggled(true);
            setTimeout(() => setAnimating(false), 1);
            setOpen(true);
        }
    }

    function handleSelect(option) {
        onSelect(option);
        toggleDropdown();
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                if (open) toggleDropdown();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
        <div className={`f-row g8 dropdown-wrap metrics-card-dropdown ${toggled ? 'open' : ''}`} ref={dropdownRef}>
            <img src={icons[selected]} />
            <button onClick={toggleDropdown} className="card-heading f-row g6">
                {selected}
                <img src={Chevron} />
            </button>
            {open && (
                <div className={`dropdown f-col g6 metrics-card-dropdown ${animating ? 'closed' : ''}`}>
                    {options.map((opt, i) => (
                        opt !== selected && (
                            <button key={i} className="dropdown-tab g10" onClick={() => handleSelect(opt)}>
                                <img src={icons[opt]} />
                                {opt}
                            </button>
                        )
                    ))}
                </div>
            )}
        </div>
    );
}

export default MetricsCardDropdown;
