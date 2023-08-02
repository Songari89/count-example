import React from "react";
import AppCounter from "./AppCounter";
import AppMovie from "./AppMovie";
import Avatar from "./components/Avatar";

export default function Appprofile() {
  return (
    <div className="container">
      <div className="banner">
        나의 <span>🤟🏻최애 스파이더맨🤟🏻</span>에게 투표하세요!
      </div>
      <div className="avatarcontainer">
        <Avatar
          image={"/image/spider-man.jpeg"}
          name={"스파이더맨 뉴 유니버스"}
          lunching={"2018.12.12"}
          isNew={""}
        />
        <div className="vs">VS</div>
        <Avatar
          image={"/image/newspider-man.jpeg"}
          name={"스파이더맨 어크로스 더 유니버스"}
          lunching={"2023.6.21"}
          isNew={true}
        />
        <AppCounter />
      </div>
      <div className="moviecontainer">
        <AppMovie />
      </div>
      <div className="empty"></div>
    </div>
  );
}
