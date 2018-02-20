import React from "react";
import styles from "../style/RewardListItem.scss";

const Armoury = ({ reward, onRewardSelect }) => {
  const defaultImgUrl = "http://www.lfcbootroom.net/wp-content/uploads/2017/12/video-comercial-novo-clash-royale.jpg";
  return (
    <div onClick={() => onRewardSelect(reward)}>
      <figure>
        <img className={styles.reward_image} src={"https://i.imgur.com/ziUxAyf.png" || defaultImgUrl} />
      </figure>
    </div>
  );
};

export default Armoury;
