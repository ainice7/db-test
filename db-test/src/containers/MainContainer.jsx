import React from "react";
import { connect } from "react-redux";

import { takeProfiles, selectedProfile } from "../actions/index";
import { Profile } from "../components/Profile";

class Main extends React.Component {
  
  componentDidMount() {
    this.props.takeProfiles();
  }

  render() {
    console.log(this.props.selectedProfiles)

    return (
      <main>
        <div className="profilesGrid">
          {this.props.profiles.map((elem, i) => (
            <Profile key={i} profileInfo={elem} selectedProfile={this.props.selectedProfile} selectedProfiles={this.props.selectedProfiles}/>
          ))}
        </div>
        { this.props.selectedProfiles.length !== 0 && <button onClick={(e) => alert(this.props.selectedProfiles) }>
          Submit
        </button> }
      </main>
    );
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles,
  selectedProfiles: state.selectedProfiles
});

const mapDispatchToProps = {
  takeProfiles,
  selectedProfile
};

export const MainCotainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
