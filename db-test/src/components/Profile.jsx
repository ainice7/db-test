import React from "react";

export class Profile extends React.Component {
  state = {
    active: false
  };

  onProfile = id => {
    this.props.selectedProfile(id);

    if (!this.state.active) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    const { profileInfo } = this.props;

    return (
      <div
        className={`profile ${this.state.active ? "profile-selected" : ""}`}
        onClick={e => this.onProfile(profileInfo.id)}
      >
        <div>
          <img src={profileInfo.url} alt="profile" />
        </div>
        <div>{profileInfo.name}</div>
      </div>
    );
  }
}
