import React from "react";
import styles from "../style/RewardListItem.scss";

const Battle = ({ reward, onRewardSelect }) => {
  const defaultImgUrl = "https://i.ytimg.com/vi/4Jdp_dkduJc/maxresdefault.jpg";
  return (
    <div onClick={() => onRewardSelect(reward)}>
      <figure>
        <img className={styles.reward_image} src={defaultImgUrl} />
      </figure>
    </div>
  );
};

export default Battle;
