import React, {Component} from 'react';
import styles from '../style/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: '' };
  }

  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li >Battle</li>
          <li className={styles.tabs}>Prizes & Ranks</li>
          <li className={styles.active}>Rewards</li>
          <li>Armoury</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
