import iconYoga from '../assets/images/icon-yoga.svg';
import iconCycle from '../assets/images/icon-cycle.svg';
import iconSwim from '../assets/images/icon-swim.svg';
import iconWeights from '../assets/images/icon-weights.svg';

function Sidebar() {
    return (
        <aside className='sidebar'>
            <div className='sidebarNav'>
                <img src={iconYoga} alt="Yoga" />
                <img src={iconCycle} alt="Cycle" />
                <img src={iconSwim} alt="Swimming" />
                <img src={iconWeights} alt="Weights" />
            </div>
            <footer>
                <p>Copyright, SportSee 2020</p>
            </footer>
        </aside>
    );
}

export default Sidebar;
