import React, { Component } from "react";
import Input from "@vtex/styleguide/lib/Input";
import Collapsible from "@vtex/styleguide/lib/Collapsible";

class CustomerDetails extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div>
        <div>
          <Input label="Receiver Name" />
        </div>
        <div>
          <Input label="Receiver Contact Number" />
        </div>
        <div>
          <Input label="Email" />
        </div>
        <div>
          <Collapsible
            onClick={(e) => this.setState({ isOpen: e.target.isOpen })}
            isOpen={this.state.isOpen}
          >
            <div>
              <div>
                <Input type="password" label="Account Number" />
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default CustomerDetails;
